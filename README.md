# Rehearsal Scheduler

A web application designed to streamline band rehearsal planning, management, and attendance tracking. The app enables bands to schedule rehearsals, send automated reminders, track member attendance, and suggest optimal rehearsal times based on member availability.

## 🎸 Features

- **User Authentication & Profile Management**
  - Secure login and registration
  - Personalized profiles with musical role and availability preferences
  - Password reset functionality

- **Band Management**
  - Create and manage multiple bands
  - Invite members via email
  - Assign roles (admin, member)
  - Band member directory

- **Rehearsal Scheduling**
  - Create, edit, and cancel rehearsals
  - Set location, date, time, and duration
  - Add rehearsal agenda and notes
  - Calendar view of all scheduled rehearsals

- **Availability Management**
  - Members can mark availability for proposed times
  - View aggregated availability of all members
  - Smart suggestions for optimal rehearsal times

- **Attendance Tracking**
  - RSVP functionality (attending, maybe, not attending)
  - Automated attendance reminders
  - Historical attendance statistics

- **Setlist Management**
  - Create and edit setlists for specific rehearsals
  - Add songs with details (key, tempo, notes)
  - Reorder songs via drag-and-drop
  - Export setlists to PDF

- **Notifications & Reminders**
  - Email notifications for new rehearsals
  - Reminder emails before rehearsals
  - In-app notification center

- **Communication**
  - In-app messaging between band members
  - Discussion thread for each rehearsal
  - File sharing for sheet music, recordings, etc.

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material-UI component library
- FullCalendar.js for calendar functionality
- Formik with Yup for form validation
- Axios for HTTP requests

### Backend
- Node.js with Express
- JWT authentication with Passport.js
- API documentation with Swagger/OpenAPI
- SendGrid for email services
- AWS S3 for file storage
- node-cron for scheduled tasks

### Database
- PostgreSQL
- Sequelize ORM

### DevOps
- Docker containerization
- GitHub Actions for CI/CD
- AWS hosting (EC2/ECS)
- HTTPS with Let's Encrypt

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16+)
- npm (v8+) or Yarn (v1.22+)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)
- AWS CLI (for deployment)

## 🚀 Getting Started

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dxaginfo/band-rehearsal-scheduler-app-june2025.git
   cd band-rehearsal-scheduler-app-june2025
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

3. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

4. **Start the development servers**
   
   **Using Docker:**
   ```bash
   docker-compose up
   ```
   
   **Without Docker:**
   ```bash
   # Start the backend server
   cd server
   npm run dev
   
   # In a new terminal, start the frontend server
   cd client
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs

### Database Setup

1. **Using Docker:**
   The PostgreSQL database is automatically set up with Docker Compose.

2. **Manual setup:**
   ```bash
   # Create the database
   createdb rehearsal_scheduler
   
   # Run migrations
   cd server
   npm run db:migrate
   
   # (Optional) Seed database with sample data
   npm run db:seed
   ```

## 🧪 Testing

```bash
# Run backend tests
cd server
npm test

# Run frontend tests
cd client
npm test
```

## 📦 Build & Deployment

### Build for Production

```bash
# Build frontend
cd client
npm run build

# Build backend
cd server
npm run build
```

### Deployment to AWS

Detailed deployment instructions can be found in the [deployment documentation](./docs/deployment.md).

## 📖 API Documentation

API documentation is automatically generated using Swagger and is available at `/api-docs` when the server is running.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [FullCalendar](https://fullcalendar.io/)
- [Material-UI](https://mui.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)