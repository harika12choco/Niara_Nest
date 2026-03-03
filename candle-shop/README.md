# Niara Nest - Handcrafted Candle E-Commerce Shop

A beautiful, full-stack e-commerce website for selling handcrafted candles, built with React and Node.js/Express.

## 🌟 Features

### Frontend (React)
- ✨ Beautiful, elegant UI with warm color scheme
- 🛒 Shopping cart with persistent storage (localStorage)
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 🔍 Product filtering by category
- 💳 Checkout functionality
- 📧 Contact form
- 🎯 React Context for state management

### Backend (Node.js/Express)
- 🚀 RESTful API
- 📦 Product management
- 🛍️ Order processing
- 📨 Contact form submissions
- 📬 Newsletter subscriptions
- 💾 In-memory database (easily replaceable with MongoDB)

## 🏗️ Project Structure

```
candle-shop/
├── client/                    # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── ProductCard.js
│   │   │   ├── Cart.js
│   │   │   └── Footer.js
│   │   ├── pages/             # Page components
│   │   │   ├── Home.js
│   │   │   ├── Shop.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── context/           # React Context
│   │   │   └── CartContext.js
│   │   ├── utils/             # Utility functions
│   │   │   └── api.js
│   │   ├── styles/            # CSS files
│   │   │   ├── App.css
│   │   │   ├── Navbar.css
│   │   │   ├── Home.css
│   │   │   ├── ProductCard.css
│   │   │   ├── Cart.css
│   │   │   ├── Shop.css
│   │   │   ├── About.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                    # Express backend
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── package.json               # Root package.json

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

### Running the Application

#### Option 1: Run both together (recommended for development)

From the root directory:
```bash
# First install concurrently globally (one time only)
npm install -g concurrently nodemon

# Then run both servers
npm run dev
```

#### Option 2: Run separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

The application will open at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order

### Contact
- `POST /api/contact` - Submit contact form

### Newsletter
- `POST /api/subscribe` - Subscribe to newsletter

### Health
- `GET /api/health` - API health check

## 🎨 Color Palette

- Primary: `#d4a574` (Warm Gold)
- Background: `#faf8f6` (Warm White)
- Secondary Background: `#f5f0eb` (Light Beige)
- Text: `#5a4a42` (Warm Brown)
- Secondary Text: `#8a7a72` (Medium Brown)

## 🛠️ Technology Stack

### Frontend
- React 18
- React Router DOM v6
- Axios for API calls
- Context API for state management
- CSS3 with advanced animations

### Backend
- Node.js
- Express.js
- CORS
- dotenv for environment variables

## 📦 Product Categories

- `luxury` - Premium luxury candles
- `sets` - Candle sets and bundles
- `calming` - Relaxing scents
- `energizing` - Refreshing scents
- `sweet` - Sweet and warm scents

## 🔧 Customization

### Adding Products
Edit `server/server.js` and modify the `products` array:

```javascript
{
  id: 9,
  name: 'Your Candle Name',
  description: 'Description here',
  price: 799,
  icon: '🕯️',
  category: 'luxury',
  stock: 20
}
```

### Changing Colors
Edit the CSS files in `client/src/styles/` to customize colors.

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.js`
3. Add navigation link in `client/src/components/Navbar.js`

## 🚀 Production Deployment

### Frontend Build
```bash
cd client
npm run build
```

### Environment Variables
Create `.env` file in server directory:

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
```

### Using MongoDB (Optional)
To use MongoDB instead of in-memory storage:

1. Install mongoose: `npm install mongoose`
2. Create models in `server/models/`
3. Update `server/server.js` to connect to MongoDB
4. Replace in-memory arrays with database queries

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🎯 Key Features Explained

### Shopping Cart
- Persistent storage using localStorage
- Add, remove, update quantities
- Real-time total calculation
- Smooth slide-in animation

### Product Filtering
- Filter by category
- All categories view
- Smooth transitions

### Order Processing
- Stock validation
- Order creation
- Customer information handling

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- User authentication
- Payment gateway integration (Stripe/Razorpay)
- Product reviews and ratings
- Wishlist functionality
- Order tracking
- Admin dashboard
- Email notifications
- Image uploads
- Search functionality
- Multi-currency support

## 📞 Support

For issues or questions, please open an issue in the repository.

---

Made with ❤️ for Niara Nest
