# CareerOS Backend

## 1. Backend Overview
CareerOS Backend is the server-side foundation for the CareerOS job application tracker. It is being built to manage authentication, job applications, application status workflows, notes, follow-ups, referral tracking, file uploads, and future AI-powered features such as job detail extraction and follow-up email generation.

The current backend setup provides the initial project structure and dependencies, and the implementation will expand in phases as the product grows.

## 2. Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment management
- CORS for cross-origin requests
- Morgan for request logging
- Nodemailer for email communication
- Cloudinary for file/media upload support

## 3. Architecture Overview
The backend follows a modular architecture designed for scalability.

Planned structure:
- Routes handle incoming API requests
- Controllers process and validate requests
- Services contain business logic
- Repositories handle database interaction
- Models define application data structures
- Middleware handles authentication, validation, and error handling

## 4. Request Flow
A typical request will follow this path:
1. Client sends a request to an API endpoint
2. Route matches the request
3. Controller receives the request and validates input
4. Service performs business logic
5. Repository interacts with the database
6. Response is returned to the client

## 5. Folder Structure
```text
src/
  app.js
  server.js
  config/
  constants/
  controllers/
  middleware/
  models/
  repositories/
  routes/
  services/
  utils/
```

## 6. Folder Responsibilities
- config/: Application configuration and environment setup
- constants/: Shared enums, statuses, error codes, and reusable constants
- controllers/: Request handling and validation logic
- middleware/: Authentication, logging, error handling, and request processing
- models/: Database schemas and data models
- repositories/: Database access layer
- routes/: API endpoint definitions
- services/: Core business logic
- utils/: Helper functions and reusable utilities

## 7. MVC + Service + Repository Architecture
The backend is planned around a clean separation of responsibilities:
- Model: defines the shape of application data
- View/Response layer: handled through controllers and API responses
- Service layer: contains business rules and workflow logic
- Repository layer: abstracts database operations

This structure keeps the codebase easier to scale as features such as AI automation, reminders, and analytics are added.

## 8. API Structure
The API will evolve into feature-based endpoints such as:
- /auth for signup, login, logout, and Google authentication
- /jobs for creating, updating, deleting, and listing job applications
- /jobs/:id/status for status transitions
- /jobs/:id/notes for note management
- /followups for reminder handling
- /referrals for recruiter and referral tracking
- /dashboard for analytics and statistics
- /ai for future AI-assisted workflows

## 9. Database Design
The backend is intended to use MongoDB as the primary database. The system will likely store data across several collections, including:
- users
- jobs
- notes
- reminders
- referrals
- activity logs
- uploaded files metadata

## 10. Models
Planned models include:
- User
- JobApplication
- JobNote
- FollowUpReminder
- ReferralContact
- ActivityLog
- UploadedFile

## 11. Routes
Routes will be grouped by feature and responsibility. Examples include:
- auth routes
- job routes
- note routes
- reminder routes
- referral routes
- dashboard routes
- AI routes

## 12. Controllers
Controllers will be responsible for:
- receiving requests
- validating input
- calling services
- formatting responses
- handling basic request errors

## 13. Services
Services will contain the core application logic for:
- authentication
- job application creation and updates
- status progression
- reminder scheduling
- email sending
- AI-powered data extraction and draft generation
- file upload handling

## 14. Repositories
Repositories will centralize database operations such as:
- creating a new job record
- updating application status
- retrieving applications with filters
- storing notes and reminders
- managing referral records

## 15. Middlewares
Planned middleware includes:
- authentication middleware
- authorization middleware
- request validation middleware
- error handling middleware
- logging middleware
- upload middleware

## 16. Configuration Files
Configuration files will be used for:
- database connection settings
- environment variables
- email transport settings
- cloud storage configuration
- application constants

## 17. Utilities
Utilities will provide reusable helper functions for:
- date formatting
- response formatting
- validation helpers
- string processing
- file handling helpers

## 18. Constants
Shared constants will include:
- application status values
- work type values
- reminder priorities
- error codes
- API response codes

## 19. Error Handling Strategy
A consistent error handling strategy will be used across the application:
- centralized error middleware
- standardized API error responses
- meaningful validation errors
- logging of unexpected failures

## 20. Authentication Flow
Authentication will support:
- traditional signup and login
- Google sign-in
- session or token-based access control
- user-specific data isolation

## 21. Authorization Flow
Authorization will ensure that users can only access and modify their own data. This is especially important for job records, notes, reminders, and referral entries.

## 22. Email Service
The email layer will be used for:
- follow-up reminders
- recruiter outreach drafts
- notification emails
- application updates

## 23. File Upload Service
A file upload service will support:
- resume uploads
- cover letter uploads
- document attachments related to a job application

Cloudinary is already included as a dependency for this purpose.

## 24. Environment Variables
The backend will rely on environment variables such as:
- PORT
- MONGO_URI
- JWT_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- FRONTEND_URL

## 25. Installation
```bash
cd CareerOS-Backend
npm install
```

Create a .env file and add the required environment variables before starting the server.

## 26. Available Scripts
```bash
npm run dev
npm start
```

## 27. Running the Server
For local development:
```bash
npm run dev
```

## 28. API Documentation
API documentation will be added as the backend grows. Planned options include:
- Postman collection
- Swagger / OpenAPI documentation
- structured endpoint documentation in this README

## 29. Logging Strategy
Logging will be used for:
- request tracking
- server errors
- authentication events
- email and upload operations

## 30. Security Practices
Planned security practices include:
- secure environment variable handling
- authentication on protected routes
- input validation
- protected access to user-owned resources
- safe error handling without leaking sensitive details

## 31. Future Integrations
Planned future extensions include:
- AI-based job detail extraction
- AI-generated follow-up emails
- resume matching and interview prep suggestions
- browser extension support
- payment and subscription support for premium features
- Gmail inbox integration

## 32. Deployment Notes
The backend should be deployed on a Node.js-compatible platform such as Render, Railway, or a VPS. Environment variables must be configured securely in the deployment environment.
