# 📁 Niara Nest Project Structure

```
candle-shop/
│
├── 📄 README.md                      # Comprehensive documentation
├── 📄 QUICKSTART.md                  # Quick start guide
├── 📄 package.json                   # Root package file
├── 📄 .gitignore                     # Git ignore rules
│
├── 📂 client/                        # REACT FRONTEND
│   ├── 📂 public/
│   │   └── index.html               # HTML template
│   │
│   ├── 📂 src/
│   │   │
│   │   ├── 📂 components/           # Reusable Components
│   │   │   ├── Navbar.js            # Navigation bar with cart icon
│   │   │   ├── ProductCard.js       # Product display card
│   │   │   ├── Cart.js              # Shopping cart sidebar
│   │   │   └── Footer.js            # Footer with social links
│   │   │
│   │   ├── 📂 pages/                # Page Components
│   │   │   ├── Home.js              # Homepage with hero & bestsellers
│   │   │   ├── Shop.js              # Shop page with filters
│   │   │   ├── About.js             # About page with brand story
│   │   │   └── Contact.js           # Contact form page
│   │   │
│   │   ├── 📂 context/              # State Management
│   │   │   └── CartContext.js       # Cart state & functions
│   │   │
│   │   ├── 📂 utils/                # Utilities
│   │   │   └── api.js               # API calls to backend
│   │   │
│   │   ├── 📂 styles/               # CSS Stylesheets
│   │   │   ├── App.css              # Global styles & backgrounds
│   │   │   ├── Navbar.css           # Navbar styling
│   │   │   ├── Home.css             # Homepage styling
│   │   │   ├── ProductCard.css      # Product card styling
│   │   │   ├── Cart.css             # Cart sidebar styling
│   │   │   ├── Shop.css             # Shop page styling
│   │   │   ├── About.css            # About page styling
│   │   │   ├── Contact.css          # Contact page styling
│   │   │   └── Footer.css           # Footer styling
│   │   │
│   │   ├── App.js                   # Main app component with routes
│   │   ├── index.js                 # React entry point
│   │   └── index.css                # Base CSS
│   │
│   └── package.json                 # Client dependencies
│
└── 📂 server/                        # NODE.JS BACKEND
    ├── 📂 routes/                   # API routes (expandable)
    ├── 📂 models/                   # Data models (expandable)
    ├── 📂 middleware/               # Middleware (expandable)
    │
    ├── server.js                    # Express server & API endpoints
    ├── .env                         # Environment variables
    └── package.json                 # Server dependencies
```

## 🎯 Key Files Explained

### Frontend Core
- **App.js**: Main component, sets up routing and wraps everything in CartProvider
- **CartContext.js**: Manages shopping cart state, localStorage, add/remove/update functions
- **api.js**: Centralized API calls to backend

### Backend Core
- **server.js**: Express server with all API routes, in-memory data storage

### Styling
Each page/component has its own CSS file for:
- ✨ Beautiful gradient backgrounds
- 🎨 Smooth animations
- 📱 Responsive design
- 🌟 Hover effects

## 🔄 Data Flow

```
User Action → Component → CartContext → localStorage
                    ↓
            API Call (api.js)
                    ↓
            Backend (server.js)
                    ↓
         Process & Respond
                    ↓
         Update UI & Cart
```

## 🚀 Start Here

1. Install dependencies (see QUICKSTART.md)
2. Start backend: `cd server && npm run dev`
3. Start frontend: `cd client && npm start`
4. Open http://localhost:3000

## 📝 Notes

- Frontend runs on port 3000
- Backend runs on port 5000
- Cart data saved in localStorage
- Orders saved in memory (server restarts clear data)
- Ready for MongoDB integration
- All components are functional components with hooks
- Fully responsive design
- Beautiful animations throughout
