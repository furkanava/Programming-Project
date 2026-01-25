# Rzeszow Event Planner

## 🌟 Project Overview

The **Rzeszow Event Planner** is a modern, full-featured web application designed to simplify the process of planning, managing, and discovering local events. Built with a focus on user experience and real-time data synchronization, it provides a platform for users to connect, organize gatherings, track RSVPs, and engage through a built-in comments system.

## ✨ Features

*   **User Authentication:** Secure sign-up and sign-in using Email/Password and Google Sign-in.
*   **Event Management:** Users can create, view, and manage their own events.
*   **Public Event Discovery:** Browse all public events happening in the Rzeszow area.
*   **RSVP System:** Simple one-click system for users to confirm their attendance.
*   **Real-time Comments:** Engage with other attendees and the event host through a dynamic comments section on each event detail page.
*   **User Profiles:** Basic user profile management.
*   **Admin Capabilities:** Implied administrative controls for event and user management (based on Firestore Rules).

## 🛠️ Tech Stack

The application is a static web application utilizing modern front-end technologies and a powerful, serverless backend.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, JavaScript | Core structure and logic |
| **Styling** | Tailwind CSS | Utility-first CSS framework for responsive design |
| **Backend** | Firebase Authentication | User registration and login |
| **Database** | Firebase Firestore | Real-time, NoSQL database for events, users, and comments |
| **Storage** | Firebase Storage | Storing user-uploaded content (e.g., event images) |

## 🚀 Installation and Setup


### Run Locally

1.  Navigate to the project directory in your terminal.
2.  Start a simple HTTP server:
    ```bash
    python3 -m http.server 8000
    ```
3.  Open your web browser and go to `http://localhost:8000`.

## 🧑‍💻 Authors

This project was developed as a collaborative effort by:

*   **Furkan Kul**
*   **Emir Okumuş**
*   **Murat Turan**

