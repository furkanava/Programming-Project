# Google Authentication Setup

Google Authentication has been successfully integrated into the application. To enable it, you need to configure it in Firebase Console.

## Steps to Enable Google Authentication

1. **Go to Firebase Console**
   - Visit [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Select your project

2. **Navigate to Authentication**
   - Click on "Authentication" in the left sidebar
   - Click on "Sign-in method" tab

3. **Enable Google Provider**
   - Find "Google" in the list of sign-in providers
   - Click on it
   - Toggle "Enable" to ON
   - Enter a project support email (this is required)
   - Click "Save"

4. **Configure OAuth Consent Screen (if needed)**
   - If prompted, you may need to configure the OAuth consent screen in Google Cloud Console
   - This is usually done automatically, but if you see errors, you may need to:
     - Go to [Google Cloud Console](https://console.cloud.google.com/)
     - Select your Firebase project
     - Navigate to "APIs & Services" > "OAuth consent screen"
     - Complete the required fields (app name, support email, etc.)
     - Add your domain to authorized domains if needed

## Testing Google Authentication

Once enabled, users can:
- Click "Login with Google" on `signin.html`
- Click "Google" button on `register.html`
- Sign in using their Google account
- Their profile will be automatically created/updated in Firestore

## Features

- **Automatic Profile Creation**: When a user signs in with Google for the first time, a profile is automatically created in Firestore
- **Profile Updates**: Existing profiles are updated with the latest Google account information (name, email, photo)
- **Email Verification**: Google accounts are automatically verified
- **Photo URL**: Google profile photos are automatically saved

## Code Implementation

The Google authentication is implemented in:
- `auth.js`: `signInWithGoogle()` function
- `signin.html`: Google sign-in button handlers
- `register.html`: Google registration button handlers

## Troubleshooting

If you encounter errors:

1. **"Popup blocked"**: Allow popups for your site
2. **"OAuth client not found"**: Make sure Google provider is enabled in Firebase Console
3. **"Invalid OAuth client"**: Check that your Firebase project has OAuth consent screen configured
4. **"Redirect URI mismatch"**: This usually resolves automatically, but if it persists, check Firebase Console settings

## Notes

- Google Authentication uses popup-based sign-in (`signInWithPopup`)
- If popups are blocked, users will see an error message
- The authentication state persists across browser sessions (LOCAL persistence)
- Google accounts don't require email verification (they're automatically verified)

