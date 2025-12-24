import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter configuration (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password',
  },
});

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// WhatsApp Order API
app.post('/api/orders/whatsapp', async (req, res) => {
  try {
    const { name, phone, product, quantity, message } = req.body;

    // Validate required fields
    if (!name || !phone || !product) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone, and product are required' 
      });
    }

    // Log order (in production, save to database)
    const orderData = {
      id: Date.now(),
      name,
      phone,
      product,
      quantity: quantity || 1,
      message: message || '',
      timestamp: new Date(),
      status: 'pending',
    };

    console.log('New WhatsApp Order:', orderData);

    // Send confirmation email to admin
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: 'New WhatsApp Order - GauPrasad',
        html: `
          <h2>New Order Received</h2>
          <p><strong>Order ID:</strong> ${orderData.id}</p>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Quantity:</strong> ${quantity || 1}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.json({
      success: true,
      message: 'Order received successfully',
      orderId: orderData.id,
    });
  } catch (error) {
    console.error('WhatsApp order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process order',
      error: error.message,
    });
  }
});

// Contact Form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    const contactData = {
      id: Date.now(),
      name,
      email,
      phone: phone || 'N/A',
      subject: subject || 'General Inquiry',
      message,
      timestamp: new Date(),
    };

    console.log('New Contact Form:', contactData);

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject || 'General Inquiry'} - GauPrasad`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.json({
      success: true,
      message: 'Message sent successfully',
      contactId: contactData.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message,
    });
  }
});

// Get Products API
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Starter Pack',
      quantity: 10,
      price: 199,
      originalPrice: 299,
      savings: 100,
      description: 'Perfect for trying our premium havan cups',
      image: '/images/starter-pack.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Family Pack',
      quantity: 30,
      price: 499,
      originalPrice: 899,
      savings: 400,
      description: 'Best value for regular use',
      image: '/images/family-pack.jpg',
      popular: true,
      inStock: true,
    },
    {
      id: 3,
      name: 'Temple Pack',
      quantity: 60,
      price: 899,
      originalPrice: 1799,
      savings: 900,
      description: 'Bulk pack for temples and events',
      image: '/images/temple-pack.jpg',
      inStock: true,
    },
  ];

  res.json({
    success: true,
    products,
  });
});

// Newsletter Subscription API
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    const subscriberData = {
      id: Date.now(),
      email,
      name: name || 'Subscriber',
      timestamp: new Date(),
    };

    console.log('New Newsletter Subscription:', subscriberData);

    // Send welcome email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to GauPrasad Family! 🙏',
        html: `
          <h2>Namaste ${name || 'Dear Friend'},</h2>
          <p>Thank you for subscribing to GauPrasad newsletter!</p>
          <p>You'll now receive updates about:</p>
          <ul>
            <li>New products and special offers</li>
            <li>Festival discount codes</li>
            <li>Tips for spiritual wellness</li>
            <li>Stories from our artisan community</li>
          </ul>
          <p>Stay blessed! 🙏</p>
          <p><strong>Team GauPrasad</strong></p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe',
      error: error.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 GauPrasad Backend Server running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Enabled' : 'Disabled'}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
