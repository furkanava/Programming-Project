// Authentication Functions

// Sign up with email and password
async function signUp(email, password, displayName) {
    try {
        if (!window.firebaseAuth) {
            return { success: false, error: 'Firebase not initialized. Please refresh the page.' };
        }
        const userCredential = await window.firebaseAuth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update display name
        await user.updateProfile({
            displayName: displayName
        });
        
        // Send email verification
        await user.sendEmailVerification();
        
        // Create user document in Firestore (will be updated with additional info in register.html)
        await window.firebaseDb.collection('users').doc(user.uid).set({
            email: email,
            displayName: displayName,
            emailVerified: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: null,
            age: null,
            gender: null,
            location: null,
            username: null
        }, { merge: true });
        
        return { success: true, user: user, emailSent: true };
    } catch (error) {
        console.error('Sign up error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with email and password
async function signIn(email, password) {
    try {
        if (!window.firebaseAuth) {
            return { success: false, error: 'Firebase not initialized. Please refresh the page.' };
        }
        const userCredential = await window.firebaseAuth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        if (!window.firebaseAuth) {
            return { success: false, error: 'Firebase not initialized. Please refresh the page.' };
        }
        
        const provider = new firebase.auth.GoogleAuthProvider();
        // Request additional scopes if needed
        provider.addScope('profile');
        provider.addScope('email');
        
        const result = await window.firebaseAuth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user document exists, if not create it
        const userDoc = await window.firebaseDb.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await window.firebaseDb.collection('users').doc(user.uid).set({
                email: user.email,
                displayName: user.displayName || user.email,
                emailVerified: user.emailVerified,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                age: null,
                gender: null,
                location: null,
                username: null
            });
        } else {
            // Update existing user document with latest info
            await window.firebaseDb.collection('users').doc(user.uid).update({
                email: user.email,
                displayName: user.displayName || user.email,
                emailVerified: user.emailVerified,
                photoURL: user.photoURL,
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        
        return { success: true, user: user };
    } catch (error) {
        console.error('Google sign in error:', error);
        // Handle popup blocked error
        if (error.code === 'auth/popup-blocked') {
            return { success: false, error: 'Popup was blocked. Please allow popups for this site and try again.' };
        } else if (error.code === 'auth/popup-closed-by-user') {
            return { success: false, error: 'Sign in was cancelled.' };
        }
        return { success: false, error: error.message || 'Failed to sign in with Google' };
    }
}

// Sign out
async function signOut() {
    try {
        if (!window.firebaseAuth) {
            return { success: false, error: 'Firebase not initialized. Please refresh the page.' };
        }
        await window.firebaseAuth.signOut();
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: error.message };
    }
}

// Get current user
function getCurrentUser() {
    return window.firebaseAuth ? window.firebaseAuth.currentUser : null;
}

// Check if user is authenticated
function isAuthenticated() {
    return window.firebaseAuth ? window.firebaseAuth.currentUser !== null : false;
}

// Get user profile from Firestore
async function getUserProfile(userId) {
    try {
        if (!window.firebaseDb) {
            return { success: false, error: 'Firebase not initialized.' };
        }
        const userDoc = await window.firebaseDb.collection('users').doc(userId).get();
        if (userDoc.exists) {
            return { success: true, profile: userDoc.data() };
        } else {
            return { success: false, error: 'User profile not found.' };
        }
    } catch (error) {
        console.error('Get user profile error:', error);
        return { success: false, error: error.message };
    }
}

// Update user profile in Firestore
async function updateUserProfile(userId, profileData) {
    try {
        if (!window.firebaseDb) {
            return { success: false, error: 'Firebase not initialized.' };
        }
        if (!window.getCurrentUser || window.getCurrentUser().uid !== userId) {
            return { success: false, error: 'Unauthorized.' };
        }
        
        await window.firebaseDb.collection('users').doc(userId).update({
            ...profileData,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        return { success: true };
    } catch (error) {
        console.error('Update user profile error:', error);
        return { success: false, error: error.message };
    }
}

// Update password
async function updatePassword(currentPassword, newPassword) {
    try {
        if (!window.firebaseAuth) {
            return { success: false, error: 'Firebase not initialized.' };
        }
        const user = window.firebaseAuth.currentUser;
        if (!user) {
            return { success: false, error: 'User not authenticated.' };
        }
        
        // Re-authenticate user
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        await user.reauthenticateWithCredential(credential);
        
        // Update password
        await user.updatePassword(newPassword);
        
        return { success: true };
    } catch (error) {
        console.error('Update password error:', error);
        return { success: false, error: error.message };
    }
}

// Send email verification
async function sendEmailVerification() {
    try {
        const user = window.firebaseAuth.currentUser;
        if (!user) {
            return { success: false, error: 'User not authenticated.' };
        }
        await user.sendEmailVerification();
        return { success: true };
    } catch (error) {
        console.error('Send email verification error:', error);
        return { success: false, error: error.message };
    }
}

// Export functions
window.signUp = signUp;
window.signIn = signIn;
window.signInWithGoogle = signInWithGoogle;
window.signOut = signOut;
window.getCurrentUser = getCurrentUser;
window.isAuthenticated = isAuthenticated;
window.getUserProfile = getUserProfile;
window.updateUserProfile = updateUserProfile;
window.updatePassword = updatePassword;
window.sendEmailVerification = sendEmailVerification;

