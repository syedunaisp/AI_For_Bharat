# Gig-Workers (GigLens)

**Smart Financial Support for the Gig Economy.**

GigWelfare (rebranded as GigLens) is a financial wellness platform designed specifically for gig workers. It uses machine learning to analyze income patterns and provide credit scoring, detailed financial forecasts, and "Trust Badges" to help workers access fair financial services.

## Tech Stack

- **Frontend**: Next.js 16 (React 19), Tailwind CSS, Framer Motion, Recharts.
- **Backend**: FastAPI (Python), Pandas, Scikit-learn.
- **Machine Learning**: Custom Random Forest model for credit scoring and income prediction.

## How to Run

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Run Development Server
npm run dev
# Access at http://localhost:3000
```

### 2. Backend Setup
```bash
# Navigate to root directory (where backend folder is located)
# Create generic virtual environment (optional but recommended)
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

# Install requirements via pip
pip install fastapi uvicorn pandas scikit-learn joblib

# Run FastAPI Server
uvicorn backend.app:app --reload --port 8000
# API Docs at http://localhost:8000/docs
```

## Features
- **Deterministic Dashboard**: Financial data exactly matches user inputs.
- **ML-Powered**: Real-time credit scoring and limit approval.
- **Gig-Centric UI**: High-contrast, mobile-first design for simplified access.
