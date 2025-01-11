#Chat Application
A simple chat application built with React, Material UI, and Socket.IO.

#Features
-Login page with email and password validation
-Real-time chat using Socket.IO
-Basic user authentication with localStorage
-Responsive design with Material UI components

#Prerequisites
-Before running this project, ensure you have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager)

#Setup Instructions
1. Clone the Repository
#bash
-git clone https://github.com/tyagiashmit4/realtime-chat-application.git
-cd chat-app

3. Install Dependencies
#Run the following command to install the required dependencies:
#bash
-cd frontend
-npm install
5. Run the Application
To start the development server, run:
#bash
-cd frontend
-npm start
This will start the application on http://localhost:3000.

4. Run the Backend Server
Make sure the backend server (Socket.IO server) is running on port 5000. You can use the following code to set it up (if you haven’t already):

bash
cd backend 
node server.js

#Technologies Used
#Frontend:
-React.js
-Material UI
-Socket.IO-client

#Backend:
-Node.js
-Express.js
-Socket.IO

#Notes
Login Page: Users must enter a valid email and password to log in.
Chat Page: After logging in, users can send and receive messages in real-time.
Authentication: User data (email) is stored in localStorage to persist across sessions.
License
This project is open-source and available under the MIT License.
