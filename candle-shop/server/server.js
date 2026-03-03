const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with MongoDB in production)
let products = [
  {
    id: 1,
    name: 'Blush Blossom Candle',
    description: 'A bouquet of soft peonies',
    price: 749,
    icon: '🌸',
    category: 'luxury',
    stock: 25
  },
  {
    id: 2,
    name: 'Serenity Tealight Set',
    description: 'For peaceful, cozy evenings',
    price: 499,
    icon: '🕯️',
    category: 'sets',
    stock: 40
  },
  {
    id: 3,
    name: 'Zen Oasis Candle',
    description: 'A tranquil escape in a jar',
    price: 899,
    icon: '🌿',
    category: 'luxury',
    stock: 18
  },
  {
    id: 4,
    name: 'Citrus Sunrise Candle',
    description: 'Fresh & energizing aroma',
    price: 699,
    icon: '🍊',
    category: 'energizing',
    stock: 30
  },
  {
    id: 5,
    name: 'Rose Garden Delight',
    description: 'Timeless floral elegance',
    price: 849,
    icon: '🌹',
    category: 'luxury',
    stock: 22
  },
  {
    id: 6,
    name: 'Moonlight Dream',
    description: 'Calming lavender nights',
    price: 799,
    icon: '🌙',
    category: 'calming',
    stock: 35
  },
  {
    id: 7,
    name: 'Vanilla Bean Bliss',
    description: 'Warm & comforting sweetness',
    price: 649,
    icon: '🍦',
    category: 'sweet',
    stock: 45
  },
  {
    id: 8,
    name: 'Ocean Breeze Set',
    description: 'Fresh coastal vibes',
    price: 899,
    icon: '🌊',
    category: 'sets',
    stock: 20
  }
];

let orders = [];
let contacts = [];

// API Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Get products by category
app.get('/api/products/category/:category', (req, res) => {
  const filtered = products.filter(p => p.category === req.params.category);
  res.json(filtered);
});

// Create order
app.post('/api/orders', (req, res) => {
  const { items, customer, total } = req.body;
  
  if (!items || !customer || !total) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate stock
  for (let item of items) {
    const product = products.find(p => p.id === item.id);
    if (!product || product.stock < item.quantity) {
      return res.status(400).json({ 
        message: `Insufficient stock for ${item.name}` 
      });
    }
  }

  // Update stock
  items.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      product.stock -= item.quantity;
    }
  });

  const order = {
    id: orders.length + 1,
    items,
    customer,
    total,
    status: 'pending',
    createdAt: new Date()
  };

  orders.push(order);
  res.status(201).json({ 
    message: 'Order created successfully', 
    order 
  });
});

// Get all orders (admin)
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Get single order
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const contact = {
    id: contacts.length + 1,
    name,
    email,
    message,
    createdAt: new Date()
  };

  contacts.push(contact);
  
  // In production, send email notification here
  console.log('New contact message:', contact);

  res.status(201).json({ 
    message: 'Message sent successfully',
    contact
  });
});

// Get all contact messages (admin)
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Newsletter subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // In production, save to database and send welcome email
  console.log('New subscriber:', email);

  res.status(201).json({ 
    message: 'Successfully subscribed to newsletter' 
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date(),
    productsCount: products.length,
    ordersCount: orders.length
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
