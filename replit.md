# MindSpace - Mental Health Support Platform

## Overview

MindSpace is a comprehensive mental health support web application that provides a safe, interactive space for users seeking mental health resources and peer connection. The platform features an FAQ system with expandable cards for common mental health questions, an interactive coping strategy wheel, inspirational quotes management, real-time peer chat functionality, and crisis resource information.

The application is designed to be accessible, supportive, and community-driven, helping users find immediate coping strategies, connect with others facing similar challenges, and access professional mental health resources when needed.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with React 18 and TypeScript using Vite as the build tool. The application follows a modern React architecture with:
- **Component-based design**: Modular UI components using shadcn/ui component library
- **State management**: React hooks with TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Navigation**: Wouter for lightweight client-side routing
- **Real-time communication**: WebSocket integration for chat functionality

### Backend Architecture
The server is built with Express.js and TypeScript providing:
- **RESTful API**: Standard HTTP endpoints for quotes, questions, and messages
- **WebSocket server**: Real-time bi-directional communication for chat features
- **In-memory storage**: MemStorage class implementing IStorage interface for development
- **Database ready**: Drizzle ORM with PostgreSQL schema definitions for production deployment

### Database Schema
The application defines four main entities using Drizzle ORM:
- **Users**: Authentication and user management (username, password)
- **Quotes**: User-submitted inspirational quotes with approval workflow
- **Messages**: Real-time chat messages with username and timestamps
- **Questions**: User-submitted questions for future FAQ additions

### UI Components and Design System
The application uses shadcn/ui component library built on Radix UI primitives:
- **Design tokens**: CSS custom properties for consistent theming
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Interactive elements**: Hover states, animations, and smooth scrolling

### Key Features Implementation
- **Interactive FAQ cards**: Expandable cards with mental health questions and comprehensive answers
- **Coping strategy wheel**: Animated spinning wheel that randomly selects coping mechanisms
- **Quote management**: User submission system with admin approval workflow
- **Real-time chat**: WebSocket-based peer support chat rooms
- **Crisis resources**: Dedicated section with emergency contact information and helpline numbers

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, TypeScript for frontend development
- **Build tools**: Vite with React plugin, PostCSS, Autoprefixer for development and bundling
- **Backend framework**: Express.js with TypeScript support for server-side API

### UI and Styling
- **Component library**: shadcn/ui built on Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font family from Google Fonts

### Database and Data Management
- **ORM**: Drizzle ORM with Drizzle Kit for database migrations and schema management
- **Database driver**: @neondatabase/serverless for PostgreSQL connection (configured for Neon Database)
- **Validation**: Zod for runtime type validation and schema validation
- **Query management**: TanStack React Query for server state management and caching

### Real-time Features
- **WebSockets**: Native WebSocket API for real-time chat functionality
- **Session management**: connect-pg-simple for PostgreSQL session storage

### Development and Deployment
- **Build tooling**: esbuild for server-side bundling and optimization
- **Development**: tsx for TypeScript execution in development
- **Deployment**: Configured for production deployment with static file serving

### Form and Validation
- **Form handling**: React Hook Form with @hookform/resolvers for form state management
- **Date utilities**: date-fns for date formatting and manipulation
- **Utility libraries**: clsx and class-variance-authority for conditional CSS class management