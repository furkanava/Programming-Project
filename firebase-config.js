// Firebase Configuration
// IMPORTANT: Replace these values with your actual Firebase project credentials
// Get them from: Firebase Console > Project Settings > General > Your apps

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbBwiY1qX-nmxVKLSRPaKXAjtRxCN0gfY",
  authDomain: "rzeszow-event-planner.firebaseapp.com",
  projectId: "rzeszow-event-planner",
  storageBucket: "rzeszow-event-planner.firebasestorage.app",
  messagingSenderId: "742566440414",
  appId: "1:742566440414:web:4c6c5633c3c9d0dfe1814f"
};

// Initialize Firebase (using compat version)
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Set persistence to LOCAL (keeps user logged in)
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Auth state observer (will be set up after window objects are available)
// This is handled in individual pages that need it

// Update UI based on authentication state
function updateAuthUI(user) {
    const loginButtons = document.querySelectorAll('.auth-login');
    const logoutButtons = document.querySelectorAll('.auth-logout');
    const userInfo = document.querySelectorAll('.auth-user-info');
    
    if (user) {
        loginButtons.forEach(btn => btn.style.display = 'none');
        logoutButtons.forEach(btn => btn.style.display = 'block');
        userInfo.forEach(el => {
            el.textContent = user.displayName || user.email;
            el.style.display = 'block';
        });
    } else {
        loginButtons.forEach(btn => btn.style.display = 'block');
        logoutButtons.forEach(btn => btn.style.display = 'none');
        userInfo.forEach(el => el.style.display = 'none');
    }
}

// Export for use in other scripts
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseStorage = storage;

