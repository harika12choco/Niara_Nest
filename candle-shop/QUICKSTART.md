# 🚀 Quick Start Guide

Get your Niara Nest candle shop running in 5 minutes!

## Step 1: Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Step 2: Start the Servers

### Option A: Run Both Together (Easiest)

```bash
# From the root directory
npm install -g concurrently nodemon
npm run dev
```

### Option B: Run Separately

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
```

## Step 3: Open Your Browser

Visit: **http://localhost:3000**

That's it! 🎉

## What You'll See

✅ Beautiful homepage with hero section
✅ Product showcase with 8 candles
✅ Working shopping cart
✅ Shop page with category filters
✅ About page with brand story
✅ Contact form
✅ Fully responsive design

## Test the Shopping Cart

1. Click "Add to Cart" on any product
2. Cart sidebar slides in from the right
3. Adjust quantities with +/- buttons
4. Click "Proceed to Checkout"
5. Order is processed and confirmation shown

## Customize Your Shop

### Change Colors
Edit `client/src/styles/App.css` - look for color values like `#d4a574`

### Add Products
Edit `server/server.js` - find the `products` array and add items

### Modify Content
- Hero text: `client/src/pages/Home.js`
- About content: `client/src/pages/About.js`
- Contact info: `client/src/pages/Contact.js`

## Troubleshooting

**Port already in use?**
```bash
# Change port in server/.env
PORT=5001

# Change proxy in client/package.json
"proxy": "http://localhost:5001"
```

**Can't install dependencies?**
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Module not found errors?**
Make sure you're in the correct directory (server or client) when installing packages.

## Next Steps

- 📖 Read the full README.md
- 🎨 Customize the design
- 🛍️ Add more products
- 🚀 Deploy to production

Need help? Check the README.md for detailed documentation!
