# HydraFlows AI – Green Hydrogen Platform

Modern, production-ready website for Hydrogen-as-a-Service (HaaS).

## Tech Stack
- **Frontend**: React (TypeScript), Vite, Framer Motion, AOS, Lucide React.
- **Backend**: Spring Boot, Spring Data JPA, Hibernate, Validator.
- **Database**: MySQL.

## Project Structure
- `/frontend`: Vite-based React application.
- `/backend`: Maven-based Spring Boot API.

## Setup Instructions

### Backend (Spring Boot)
1. **Prerequisites**: Java 17+, Maven, MySQL.
2. **Database**: Create a database named `hydraflows_db` or let Spring Boot create it automatically if your MySQL user has permissions. Update `src/main/resources/application.properties` with your MySQL credentials.
3. **Run**: 
   ```bash
   cd backend
   mvn spring-boot:run
   ```
4. **API Endpoints**:
   - `POST /api/contact/submit`: Submit lead form data.
   - `GET /api/contact/health`: Health check.

### Frontend (React)
1. **Prerequisites**: Node.js 18+.
2. **Install**:
   ```bash
   cd frontend
   npm install
   ```
3. **Run**:
   ```bash
   npm run dev
   ```
4. **Build**:
   ```bash
   npm run build
   ```

## Deployment Steps
1. **Backend**: Build the JAR using `mvn clean package` and deploy to any cloud provider (AWS, GCP, Azure) or a platform like Heroku/Railway.
2. **Database**: Use a managed MySQL instance (AWS RDS, PlanetScale, etc.).
3. **Frontend**: Deploy the `dist` folder after running `npm run build` to Vercel, Netlify, or AWS S3 + CloudFront.
4. **Environment Variables**: Update the API URL in `ContactForm.tsx` to your production backend URL.

## SEO Optimization
- Targeted keywords: "Green Hydrogen India", "Hydrogen as a Service", "Clean Energy Solutions".
- Semantic HTML5 structure.
- Optimized meta descriptions and titles.

## Features
- **HaaS Explanation**: Hero and Solutions sections.
- **Industry Vertical Sections**: HydraHome, HydraMicro, HydraRural, etc.
- **Lead Capture**: Integrated with backend.
- **Impact Dashboard**: Mockup showing real-time sustainability metrics.
- **Premium Design**: Dark mode base with emerald green accents and smooth scroll animations.
