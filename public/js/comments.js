// Comments Functions

// Add comment to event
async function addComment(eventId, commentText) {
    try {
        const user = window.getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        const commentRef = window.firebaseDb.collection('events').doc(eventId)
            .collection('comments').doc();
        
        const comment = {
            id: commentRef.id,
            userId: user.uid,
            userName: user.displayName || user.email,
            userPhotoURL: user.photoURL || null,
            text: commentText,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: [],
            likeCount: 0
        };
        
        await commentRef.set(comment);
        
        return { success: true, commentId: commentRef.id };
    } catch (error) {
        console.error('Add comment error:', error);
        return { success: false, error: error.message };
    }
}

// Get comments for an event
async function getCommentsForEvent(eventId, limit = 50) {
    try {
        const snapshot = await window.firebaseDb.collection('events').doc(eventId)
            .collection('comments')
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();
        
        const comments = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            comments.push({
                id: doc.id,
                ...data,
                createdAt: data.createdAt?.toDate() || new Date()
            });
        });
        
        return { success: true, comments: comments };
    } catch (error) {
        console.error('Get comments error:', error);
        return { success: false, error: error.message };
    }
}

// Delete comment
async function deleteComment(eventId, commentId) {
    try {
        const user = window.getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        const commentDoc = await window.firebaseDb.collection('events').doc(eventId)
            .collection('comments').doc(commentId).get();
        
        if (!commentDoc.exists) {
            return { success: false, error: 'Comment not found' };
        }
        
        const comment = commentDoc.data();
        if (comment.userId !== user.uid) {
            return { success: false, error: 'Not authorized to delete this comment' };
        }
        
        await window.firebaseDb.collection('events').doc(eventId)
            .collection('comments').doc(commentId).delete();
        
        return { success: true };
    } catch (error) {
        console.error('Delete comment error:', error);
        return { success: false, error: error.message };
    }
}

// Like/Unlike comment
async function toggleCommentLike(eventId, commentId) {
    try {
        const user = window.getCurrentUser();
        if (!user) {
            return { success: false, error: 'User must be authenticated' };
        }
        
        const commentRef = window.firebaseDb.collection('events').doc(eventId)
            .collection('comments').doc(commentId);
        
        const commentDoc = await commentRef.get();
        if (!commentDoc.exists) {
            return { success: false, error: 'Comment not found' };
        }
        
        const comment = commentDoc.data();
        const likes = comment.likes || [];
        const isLiked = likes.includes(user.uid);
        
        if (isLiked) {
            // Unlike
            await commentRef.update({
                likes: firebase.firestore.FieldValue.arrayRemove(user.uid),
                likeCount: firebase.firestore.FieldValue.increment(-1)
            });
        } else {
            // Like
            await commentRef.update({
                likes: firebase.firestore.FieldValue.arrayUnion(user.uid),
                likeCount: firebase.firestore.FieldValue.increment(1)
            });
        }
        
        return { success: true, isLiked: !isLiked };
    } catch (error) {
        console.error('Toggle like error:', error);
        return { success: false, error: error.message };
    }
}

// Export functions
window.addComment = addComment;
window.getCommentsForEvent = getCommentsForEvent;
window.getEventComments = getCommentsForEvent; // Alias for backward compatibility
window.deleteComment = deleteComment;
window.toggleCommentLike = toggleCommentLike;

