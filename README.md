# ScoutMD - Doctor Finder Web App

## Project Overview

ScoutMD is a web application designed to streamline the process of finding the right doctor in a hospital. The app allows users to input details about their ailments and the affected body part, guiding them to the appropriate doctor's office. The goal is to save time for patients and improve access to critical healthcare services.

## Intention/Goals of the Project

The primary goal of ScoutMD is to automate and expedite the process of finding a doctor based on a patient's specific ailment and affected body part. By doing so, the app aims to reduce waiting times, ease hospital traffic, and enhance accessibility, especially for critical cases.

## Functional Requirements

### 1. User Registration and Authentication

- Users can create accounts with personal information.
- Secure authentication process for user accounts.

### 2. User Profile Management

- Users can update their profile information.
- Password reset functionality for forgotten passwords.

### 3. Ailment Identification

- Users can input details about their ailment, including type and severity.
- System suggests possible ailments based on user input.

### 4. Locale Selection

- Users can specify the affected area or body part.
- System suggests relevant medical specialists based on the selected locale.

### 5. Doctor Search and Recommendation

- System has a database of doctors and their specialties.
- Recommends suitable doctors based on user's ailment and selected locale.
- Doctor profiles display relevant information: name, specialization, location, and availability.

### 6. Appointment Booking

- Users can schedule appointments with recommended doctors.
- System shows available time slots for each doctor.

### 7. User Feedback and Reviews

- Users can rate and review doctors after appointments.
- Display average ratings and reviews to help users make informed decisions.

### 8. Search and Filter Functionality

- Users can search for doctors by name, specialty, location, or availability.
- Advanced filtering options for refining search results.

### 9. Mobile Responsiveness

- Web app is responsive and functional on various devices, including smartphones and tablets.

## Technologies Used

- Frontend: ReactJS
- Backend: Node.js, Express
- Database: MongoDB Atlas

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` in both the client and server directories.
3. Set up MongoDB Atlas and update connection strings.
4. Run the app using `npm start` in both the client and server directories.
