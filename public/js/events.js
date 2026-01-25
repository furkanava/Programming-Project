// Events Functions

// Create a new event
async function createEvent(eventData) {
    try {
        if (!window.getCurrentUser) {
            return { success: false, error: 'Authentication functions not loaded. Please refresh the page.' };
        }
        
        const user = window.getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated. Please sign in first.' };
        }
        
        if (!window.firebaseDb) {
            return { success: false, error: 'Firebase database not initialized. Please refresh the page.' };
        }
        
        // Convert date string to Firestore Timestamp
        let eventDate;
        if (eventData.date) {
            // Combine date and time for proper timestamp
            const dateTimeString = eventData.date + (eventData.startTime ? 'T' + eventData.startTime : 'T00:00');
            eventDate = firebase.firestore.Timestamp.fromDate(new Date(dateTimeString));
        } else {
            eventDate = firebase.firestore.Timestamp.fromDate(new Date());
        }
        
        const eventRef = window.firebaseDb.collection('events').doc();
        const event = {
            id: eventRef.id,
            title: eventData.title,
            description: eventData.description,
            date: eventDate,
            dateString: eventData.date, // Keep original string for easy querying
            startTime: eventData.startTime,
            endTime: eventData.endTime || null,
            location: eventData.location,
            city: eventData.city || 'Rzeszow',
            price: eventData.price || 0,
            capacity: eventData.capacity || null,
            category: eventData.category,
            isPublic: eventData.isPublic !== false,
            imageURL: eventData.imageURL || null,
            createdBy: user.uid,
            createdByName: user.displayName || user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            attendees: [],
            attendeeCount: 0
        };
        
        console.log('Saving event to Firestore:', event);
        await eventRef.set(event);
        console.log('Event saved successfully with ID:', eventRef.id);
        
        return { success: true, eventId: eventRef.id };
    } catch (error) {
        console.error('Create event error:', error);
        return { success: false, error: error.message };
    }
}

// Convert image to base64 and compress
function compressImage(file, maxWidth = 800, maxHeight = 600, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Calculate new dimensions
                let width = img.width;
                let height = img.height;
                
                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        height = (height * maxWidth) / width;
                        width = maxWidth;
                    } else {
                        width = (width * maxHeight) / height;
                        height = maxHeight;
                    }
                }
                
                // Create canvas and compress
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Convert to base64
                const base64 = canvas.toDataURL('image/jpeg', quality);
                resolve(base64);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Save image as base64 to Firestore (free alternative to Storage)
async function uploadEventImage(eventId, file) {
    try {
        if (!window.getCurrentUser) {
            return { success: false, error: 'Authentication functions not loaded.' };
        }
        
        const user = window.getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        if (!window.firebaseDb) {
            return { success: false, error: 'Firebase database not initialized.' };
        }
        
        // Check file size (max 5MB before compression)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return { success: false, error: 'Image size must be less than 5MB. Please compress the image.' };
        }
        
        // Check file type
        if (!file.type.startsWith('image/')) {
            return { success: false, error: 'File must be an image' };
        }
        
        console.log('Compressing and converting image to base64...', 'Original size:', file.size, 'Type:', file.type);
        
        // Compress and convert to base64
        const base64Image = await compressImage(file);
        
        console.log('Image compressed, base64 length:', base64Image.length);
        
        // Save base64 to Firestore
        await window.firebaseDb.collection('events').doc(eventId).update({
            imageBase64: base64Image,
            imageURL: base64Image, // Also set imageURL for compatibility
            imageUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('Image saved to Firestore as base64');
        return { success: true, url: base64Image };
    } catch (error) {
        console.error('Upload image error:', error);
        return { success: false, error: error.message || 'Failed to process image' };
    }
}

// Get all public events
async function getPublicEvents(limit = 20) {
    try {
        // Try to get events ordered by date, if that fails, get without ordering
        let snapshot;
        try {
            snapshot = await window.firebaseDb.collection('events')
                .where('isPublic', '==', true)
                .orderBy('date', 'asc')
                .limit(limit)
                .get();
        } catch (error) {
            // If ordering fails (missing index), get without ordering
            console.log('Ordering by date failed, getting without order:', error);
            snapshot = await window.firebaseDb.collection('events')
                .where('isPublic', '==', true)
                .limit(limit)
                .get();
        }
        
        const events = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            events.push({ id: doc.id, ...data });
        });
        
        // Sort events by date manually if needed
        events.sort((a, b) => {
            let dateA = new Date();
            let dateB = new Date();
            
            if (a.date) {
                if (a.date.toDate) dateA = a.date.toDate();
                else if (a.date.seconds) dateA = new Date(a.date.seconds * 1000);
                else if (a.dateString) dateA = new Date(a.dateString);
            }
            
            if (b.date) {
                if (b.date.toDate) dateB = b.date.toDate();
                else if (b.date.seconds) dateB = new Date(b.date.seconds * 1000);
                else if (b.dateString) dateB = new Date(b.dateString);
            }
            
            return dateA - dateB;
        });
        
        console.log('Loaded public events:', events.length);
        return { success: true, events: events };
    } catch (error) {
        console.error('Get events error:', error);
        return { success: false, error: error.message };
    }
}

// Get user's events
async function getUserEvents() {
    try {
        const user = getCurrentUser();
        if (!user) {
            console.error('No authenticated user found');
            return { success: false, error: 'User must be authenticated' };
        }
        
        console.log('Fetching events for user:', user.uid);
        
        // Try with orderBy first, if it fails, fetch without ordering
        let snapshot;
        try {
            snapshot = await window.firebaseDb.collection('events')
                .where('createdBy', '==', user.uid)
                .orderBy('date', 'asc')
                .get();
        } catch (error) {
            console.log('OrderBy failed (missing index), fetching without ordering:', error.message);
            // If ordering fails (missing composite index), get without ordering
            try {
                snapshot = await window.firebaseDb.collection('events')
                    .where('createdBy', '==', user.uid)
                    .get();
            } catch (fallbackError) {
                console.error('Fallback query also failed:', fallbackError);
                return { success: false, error: fallbackError.message };
            }
        }
        
        const events = [];
        snapshot.forEach(doc => {
            events.push({ id: doc.id, ...doc.data() });
        });
        
        // Sort events by date manually (client-side)
        events.sort((a, b) => {
            let dateA = new Date();
            let dateB = new Date();
            
            if (a.date) {
                if (a.date.toDate) dateA = a.date.toDate();
                else if (a.date.seconds) dateA = new Date(a.date.seconds * 1000);
                else if (a.dateString) dateA = new Date(a.dateString);
            }
            
            if (b.date) {
                if (b.date.toDate) dateB = b.date.toDate();
                else if (b.date.seconds) dateB = new Date(b.date.seconds * 1000);
                else if (b.dateString) dateB = new Date(b.dateString);
            }
            
            return dateA - dateB;
        });
        
        console.log('Loaded user events:', events.length, events);
        return { success: true, events: events };
    } catch (error) {
        console.error('Get user events error:', error);
        return { success: false, error: error.message };
    }
}

// Get event by ID
async function getEventById(eventId) {
    try {
        const doc = await window.firebaseDb.collection('events').doc(eventId).get();
        if (!doc.exists) {
            return { success: false, error: 'Event not found' };
        }
        
        return { success: true, event: { id: doc.id, ...doc.data() } };
    } catch (error) {
        console.error('Get event error:', error);
        return { success: false, error: error.message };
    }
}

// RSVP to an event
async function rsvpToEvent(eventId) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        const eventRef = window.firebaseDb.collection('events').doc(eventId);
        const eventDoc = await eventRef.get();
        
        if (!eventDoc.exists) {
            return { success: false, error: 'Event not found' };
        }
        
        const event = eventDoc.data();
        const attendees = event.attendees || [];
        
        // Check if already RSVP'd
        if (attendees.includes(user.uid)) {
            return { success: false, error: 'Already RSVP\'d to this event' };
        }
        
        // Check capacity
        if (event.capacity && attendees.length >= event.capacity) {
            return { success: false, error: 'Event is full' };
        }
        
        // Add RSVP
        await eventRef.update({
            attendees: firebase.firestore.FieldValue.arrayUnion(user.uid),
            attendeeCount: firebase.firestore.FieldValue.increment(1)
        });
        
        // Create RSVP document
        await window.firebaseDb.collection('events').doc(eventId)
            .collection('rsvps').doc(user.uid).set({
                userId: user.uid,
                userName: user.displayName || user.email,
                userEmail: user.email,
                rsvpAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        
        return { success: true };
    } catch (error) {
        console.error('RSVP error:', error);
        return { success: false, error: error.message };
    }
}

// Cancel RSVP
async function cancelRSVP(eventId) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        const eventRef = window.firebaseDb.collection('events').doc(eventId);
        
        // Remove RSVP
        await eventRef.update({
            attendees: firebase.firestore.FieldValue.arrayRemove(user.uid),
            attendeeCount: firebase.firestore.FieldValue.increment(-1)
        });
        
        // Delete RSVP document
        await window.firebaseDb.collection('events').doc(eventId)
            .collection('rsvps').doc(user.uid).delete();
        
        return { success: true };
    } catch (error) {
        console.error('Cancel RSVP error:', error);
        return { success: false, error: error.message };
    }
}

// Delete event
async function deleteEvent(eventId) {
    try {
        console.log('deleteEvent called for:', eventId);
        
        const user = getCurrentUser();
        if (!user) {
            console.error('Delete failed: User not authenticated');
            return { success: false, error: 'User must be authenticated' };
        }
        
        console.log('User authenticated:', user.uid);
        
        const eventDoc = await window.firebaseDb.collection('events').doc(eventId).get();
        if (!eventDoc.exists) {
            console.error('Delete failed: Event not found');
            return { success: false, error: 'Event not found' };
        }
        
        const event = eventDoc.data();
        console.log('Event found, createdBy:', event.createdBy, 'Current user:', user.uid);
        
        if (event.createdBy !== user.uid) {
            console.error('Delete failed: Not authorized');
            return { success: false, error: 'Not authorized to delete this event' };
        }
        
        console.log('Deleting event from Firestore...');
        await window.firebaseDb.collection('events').doc(eventId).delete();
        console.log('Event deleted from Firestore successfully');
        
        return { success: true };
    } catch (error) {
        console.error('Delete event error:', error);
        return { success: false, error: error.message };
    }
}

// Update event
async function updateEvent(eventId, eventData) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        // Check if user owns the event
        const eventDoc = await window.firebaseDb.collection('events').doc(eventId).get();
        if (!eventDoc.exists) {
            return { success: false, error: 'Event not found' };
        }
        
        const event = eventDoc.data();
        if (event.createdBy !== user.uid) {
            return { success: false, error: 'Not authorized to update this event' };
        }
        
        // Convert date string to Firestore Timestamp if date is provided
        let updateData = {
            title: eventData.title,
            description: eventData.description,
            startTime: eventData.startTime,
            endTime: eventData.endTime || null,
            location: eventData.location,
            city: eventData.city || 'Rzeszow',
            price: eventData.price || 0,
            capacity: eventData.capacity || null,
            category: eventData.category,
            isPublic: eventData.isPublic !== false,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        if (eventData.date) {
            const dateTimeString = eventData.date + (eventData.startTime ? 'T' + eventData.startTime : 'T00:00');
            updateData.date = firebase.firestore.Timestamp.fromDate(new Date(dateTimeString));
            updateData.dateString = eventData.date;
        }
        
        await window.firebaseDb.collection('events').doc(eventId).update(updateData);
        
        return { success: true };
    } catch (error) {
        console.error('Update event error:', error);
        return { success: false, error: error.message };
    }
}

// Export functions
window.createEvent = createEvent;
window.updateEvent = updateEvent;
window.uploadEventImage = uploadEventImage;
window.getPublicEvents = getPublicEvents;
window.getUserEvents = getUserEvents;
window.getEventById = getEventById;
window.rsvpToEvent = rsvpToEvent;
window.cancelRSVP = cancelRSVP;
window.deleteEvent = deleteEvent;

