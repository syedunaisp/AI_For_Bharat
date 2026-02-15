# GigLens - Requirements Document

## 1. Project Overview
GigLens is a financial health and support platform tailored for gig economy workers. It provides real-time financial tracking, AI-driven insights, credit scoring, and safety nets like government scheme access and emergency funding.

## 2. Functional Requirements

### 2.1 User Authentication
- **Provider**: Clerk (Managed Authentication)
- **Features**: 
  - Secure Sign-up/Login (Email, Socials)
  - User Profile Management via Clerk
  - Protected Route Middleware

### 2.2 Dashboard Modules
- **Main Dashboard**: Real-time overview of earnings, expenses, and credit score.
- **Transactions**: Detailed income and expense logging with categorization.
- **FlowForward**: Cash flow analysis and forecasting tools.
- **Goals**: Financial goal setting (e.g., buying a bike, emergency fund) with progress tracking.
- **Gig Tabby**: Buy Now Pay Later (BNPL) feature for operational expenses (e.g., vehicle repairs).
- **Government Schemes**: Integrated checker for schemes like Ayushman Bharat and e-Shram.
- **Jobs**: Curated listing of gig work opportunities.
- **Stress Simulator**: Financial resilience testing under various scenarios.

### 2.3 Voice Assistant
- **Web Assistant**: 
  - Powered by **Groq (LLaMA 3.3)** for fast, data-grounded responses.
  - Supports multiple languages (English, Hindi, Telugu).
  - accessible via floating-action button or landing page.
- **Phone Assistant**:
  - **Twilio Integration** for voice-based interaction over phone calls.
  - Provides financial summaries via voice.

### 2.4 ML & Analytics
- **Predictive Engine**: 
  - Python (FastAPI) backend for calculating credit scores and risk probabilities.
  - Uses `scikit-learn` models for predictions.
- **Leak Detection**: Identifies unnecessary spending patterns.

## 3. Technical Requirements

### 3.1 Frontend Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, Radix UI (Shadcn), Lucide React
- **State Management**: Zustand, React Context
- **Charts**: Recharts, Chart.js

### 3.2 Backend Stack
- **Primary Backend**: Next.js API Routes (Serverless)
- **ML Service**: Python 3.x with FastAPI
- **Database**: PostgreSQL with Prisma ORM

### 3.3 AI & Voice Stack
- **LLM Provider**: Groq (LLaMA 3.3 70B Versatile)
- **Voice Input/Output**: Web Speech API (Browser native)
- **Telephony**: Twilio Voice API

## 4. Data Requirements
- **User Data**: Synced between Clerk and local Database via Webhooks.
- **Financial Data**:
  - Transactions (Amount, Category, Date)
  - Snapshots (Monthly revenue, expenses)
- **Encryption**: All sensitive financial data encrypted at rest and in transit.

## 5. Deployment Requirements
- **Frontend/API**: Vercel (recommended) or similar Node.js host.
- **ML Service**: Containerized hosting (e.g., Railway, Render, Docker).
- **Database**: Managed PostgreSQL.