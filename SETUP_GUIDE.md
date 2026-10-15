# PyShikhi - Quick Setup Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Firebase Setup (2 minutes)

1. Visit: https://console.firebase.google.com/
2. Click "Create a project" → Name it "PyShikhi" → Continue
3. Disable Google Analytics (optional) → Create project
4. Wait for project creation...

**Enable Authentication:**
- Left sidebar → Build → Authentication → Get started
- Sign-in method tab → Email/Password → Enable → Save
- Sign-in method tab → Google → Enable → Save

**Create Firestore Database:**
- Left sidebar → Build → Firestore Database → Create database
- Start in production mode → Next
- Choose location (closest to you) → Enable

**Get Firebase Config:**
- Project Overview (gear icon) → Project settings
- Scroll down to "Your apps" → Web app icon `</>`
- Register app → Name: "PyShikhi Web" → Register app
- Copy the config object (apiKey, authDomain, etc.)

### Step 2: Get Anthropic API Key (1 minute)

1. Visit: https://console.anthropic.com/
2. Sign up / Log in
3. API Keys (left sidebar) → Create Key
4. Copy the API key (starts with `sk-ant-...`)

### Step 3: Setup Frontend (1 minute)

```bash
cd pyshikhi-frontend

# Install dependencies (this may take 1-2 minutes)
npm install

# Create .env file from example
copy .env.example .env

# Open .env in any text editor and paste your Firebase config:
# VITE_FIREBASE_API_KEY=YOUR_VALUE
# VITE_FIREBASE_AUTH_DOMAIN=YOUR_VALUE
# VITE_FIREBASE_PROJECT_ID=YOUR_VALUE
# VITE_FIREBASE_STORAGE_BUCKET=YOUR_VALUE
# VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_VALUE
# VITE_FIREBASE_APP_ID=YOUR_VALUE
# VITE_API_URL=http://localhost:3001

# Start the app
npm run dev
```

### Step 4: Setup Backend (1 minute)

Open a **new terminal**:

```bash
cd pyshikhi-backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Open .env and add your Anthropic API key:
# ANTHROPIC_API_KEY=sk-ant-your-key-here
# PORT=3001

# Start backend
npm start
```

### Step 5: Open the App

1. Frontend: http://localhost:5173
2. Backend API: http://localhost:3001/api/health

## 🎉 You're Done!

Now you can:
1. Sign up for an account
2. Explore Exercise section
3. Solve questions
4. Use AI solver

---

## 🔧 Detailed Configuration

### Frontend Environment Variables (.env)

```env
# Get these from Firebase Console
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# Backend API URL (don't change if running locally)
VITE_API_URL=http://localhost:3001
```

### Backend Environment Variables (.env)

```env
# Get this from Anthropic Console
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Server port (default: 3001)
PORT=3001
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/ (download LTS version)

### Issue 2: Firebase errors on login
**Solution**: 
- Make sure Email/Password is enabled in Firebase Authentication
- Check if all Firebase config values are correct in `.env`

### Issue 3: AI Solve not working
**Solution**: 
- Check if backend is running (you should see "✅ PyShikhi backend server running")
- Verify Anthropic API key is correct
- Check if you have API credits in Anthropic console

### Issue 4: "Port already in use"
**Solution**: 
- Frontend: Change Vite port by running `npm run dev -- --port 5174`
- Backend: Change PORT in `.env` to 3002 (and update VITE_API_URL in frontend)

### Issue 5: Pyodide not loading
**Solution**: 
- Check your internet connection (Pyodide loads from CDN)
- Refresh the page
- Clear browser cache

---

## 📱 Mobile Testing

To test on your phone:

1. Find your computer's local IP:
   - Windows: `ipconfig` → Look for IPv4 Address (e.g., 192.168.1.5)
   - Mac/Linux: `ifconfig` → Look for inet address

2. Update frontend `.env`:
   ```env
   VITE_API_URL=http://192.168.1.5:3001
   ```

3. Restart frontend: `npm run dev -- --host`

4. Open on phone: `http://192.168.1.5:5173`

---

## 🎓 First Time Using the App?

1. **Sign Up**: Click "সাইন আপ করুন (Sign Up)"
2. **Explore Exercise**: Click "উদাহরণ (Exercise)" → Select a topic → Run examples
3. **Try Questions**: Click "প্রশ্ন (Question)" → Select easy question → Write code → Run
4. **Use AI Solver**: Click "সমাধান (Solve)" → Paste a problem → Get solution

---

## 📊 What's Included?

✅ **10+ Exercise Topics** with Bengali comments
✅ **12+ Practice Questions** with auto-validation
✅ **AI Problem Solver** with Claude integration
✅ **User Authentication** with Email/Password + Google
✅ **Progress Tracking** in Firestore
✅ **Dark/Light Mode** toggle
✅ **Fully Responsive** design
✅ **In-browser Python** execution with Pyodide

---

## 💡 Tips

- Use **Exercise** section to learn concepts
- Use **Question** section to practice
- Use **AI Solve** when you're stuck or want detailed explanations
- Toggle dark mode for comfortable night coding
- Track your progress as you complete topics

---

**Need help?** Check the main README.md for detailed documentation.

Happy Learning! 🚀 পাইথন শিখুন সহজভাবে!
