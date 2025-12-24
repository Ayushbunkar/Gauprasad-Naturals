# GauPrasad Backend Server

Backend API server for GauPrasad ecommerce website.

## Features

- WhatsApp order processing
- Contact form handling
- Newsletter subscriptions
- Email notifications
- Product API endpoints

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your credentials:
- EMAIL_USER: Your Gmail address
- EMAIL_PASS: Your Gmail app-specific password
- ADMIN_EMAIL: Email to receive notifications

## Gmail App Password Setup

1. Go to Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Generate new app password
4. Copy the password to EMAIL_PASS in .env

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- GET `/api/health`

### WhatsApp Orders
- POST `/api/orders/whatsapp`
- Body: { name, phone, product, quantity, message }

### Contact Form
- POST `/api/contact`
- Body: { name, email, phone, subject, message }

### Products
- GET `/api/products`

### Newsletter
- POST `/api/newsletter`
- Body: { email, name }

## Made with ❤️ for GauPrasad 🙏
