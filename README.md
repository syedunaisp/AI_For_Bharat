# GigLens - Financial Health for Gig Workers

GigLens is a comprehensive financial platform designed to help gig economy workers track earnings, manage expenses, and access financial safety nets like government schemes and credit.

## 🚀 Key Features

- **📊 Financial Dashboard**: Real-time overview of income, expenses, and burn rate.
- **🤖 Voice Assistant**: 
  - **Web**: Powered by **Groq LLaMA 3.3** for data-grounded financial advice.
  - **Phone**: **Twilio** integration for voice-first interactions.
- **🔮 FlowForward**: Cash flow analysis and future earnings forecasting.
- **🎯 Goal Setting**: Smart goal tracking for savings and operational costs.
- **🐈 Gig Tabby**: Buy Now Pay Later (BNPL) for gig-related expenses.
- **🏛️ Government Schemes**: Integrated eligibility checker for welfare schemes.
- **📉 Stress Simulator**: Test your financial resilience against potential risks.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), Tailwind CSS, Shadcn UI.
- **Backend Logic**: Next.js API Routes (Serverless).
- **ML Service**: Python FastAPI + Scikit-Learn (Credit Scoring & Predictions).
- **Database**: PostgreSQL with Prisma ORM.
- **Authentication**: Clerk.
- **AI/Voice**: Groq, Twilio, Web Speech API.

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.12+
- PostgreSQL Database
- Clerk Account
- Groq / Twilio Accounts (for Voice features)

### 1. Clone & Install
```bash
git clone https://github.com/your-username/gig-workers-main.git
cd gig-workers-main

# Install Frontend Dependencies
npm install

# Install Backend Dependencies
pip install -r requirements.txt
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://user:password@host:port/db"

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# AI Services
GROQ_API_KEY=gsk_...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Running the App

You need to run both the Next.js frontend and the Python ML service.

**Terminal 1 (Frontend):**
```bash
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 (ML Service):**
```bash
uvicorn backend.app:app --reload --port 8000
# Runs on http://localhost:8000
```

## 📦 Deployment

- **Frontend**: Deploy to [Vercel](https://vercel.com).
- **ML Service**: Deploy to Render/Railway/DigitalOcean (Containerized).
- **Database**: Supabase / Neon / AWS RDS.

See `DEPLOYMENT_CHECKLIST.md` for detailed deployment steps.
