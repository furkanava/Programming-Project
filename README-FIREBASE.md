# Firebase Setup Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "Rzeszow Event Planner" (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In Firebase Console, go to **Authentication** > **Get started**
2. Click **Sign-in method** tab
3. Enable **Email/Password** provider
4. Click **Save**

## 3. Create Firestore Database

1. Go to **Firestore Database** > **Create database**
2. Start in **production mode** (we'll set rules later)
3. Choose a location (e.g., `europe-west1`)
4. Click **Enable**

## 4. Set Firestore Rules

1. Go to **Firestore Database** > **Rules** tab
2. Copy the content from `firestore.rules` file
3. Paste it into the rules editor
4. Click **Publish**

## 5. Set Storage Rules

1. Go to **Storage** > **Get started**
2. Start in **production mode**
3. Choose a location
4. Go to **Rules** tab
5. Copy the content from `storage.rules` file
6. Paste it into the rules editor
7. Click **Publish**

## 6. Get Firebase Config

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click **Web** icon (`</>`)
4. Register app with nickname: "Rzeszow Event Planner Web"
5. Copy the `firebaseConfig` object

## 7. Update firebase-config.js

1. Open `firebase-config.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## 8. Add Firebase SDK to HTML Files

Add these scripts to all HTML files (before closing `</body>` tag):

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<!-- Firebase Config -->
<script src="firebase-config.js"></script>

<!-- Firebase Functions -->
<script src="auth.js"></script>
<script src="events.js"></script>
<script src="comments.js"></script>
```

## 9. Create Firestore Indexes (if needed)

If you get errors about missing indexes:
1. Go to **Firestore Database** > **Indexes**
2. Click the error link to create the required index
3. Wait for the index to build

## 10. Test the Setup

1. Open `signin.html` in your browser
2. Try to register a new account
3. Try to sign in
4. Create an event
5. Check Firebase Console to see if data is being saved

## Troubleshooting

### "Permission denied" errors
- Check Firestore rules are published correctly
- Make sure user is authenticated
- Verify rules match your data structure

### "Missing index" errors
- Create the required index from the error link
- Wait for index to finish building

### Images not uploading
- Check Storage rules are published
- Verify Storage is enabled
- Check file size limits (default is 5MB)

### Authentication not working
- Verify Email/Password is enabled in Authentication
- Check browser console for errors
- Verify firebase-config.js has correct values

