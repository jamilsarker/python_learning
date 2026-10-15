# PyShikhi - Python Learning Platform for Bengali Learners

<div align="center">
  <h3>পাইথন শিখুন সহজভাবে</h3>
  <p>A complete, production-quality Python learning platform with Bengali support</p>
</div>

## 🌟 Features

### 🎓 Exercise Section (উদাহরণ থেকে শিখুন)
- 10+ topics from beginner to advanced
- Each example has Bengali comments on every line
- Live code execution using Pyodide (runs in browser, no server load)
- Edit and run code in real-time
- Monaco code editor with syntax highlighting
- Track completed topics
- Sample topics: Variables, Operators, Loops, Functions, Lists, Dictionaries, File Handling, OOP, etc.

### 📝 Question Section (প্রশ্ন সমাধান করুন)
- 12+ practice questions with multiple difficulty levels
- Filter by difficulty: Easy, Medium, Hard
- Inline code editor with live execution
- Automatic test case validation
- Show/Hide hints and solutions
- Visual feedback: ✅ সঠিক (Correct) or ❌ ভুল (Wrong)
- Track solved questions and scores
- Bengali explanations and hints

### 🤖 AI Solve Section (AI সমাধানকারী)
- Paste any Python problem or error
- Get complete solutions with Bengali comments on EVERY line
- Powered by Claude AI (Anthropic)
- Copy code, run code, and see output
- Solution history saved in Firestore
- Rate limiting (10 requests/minute per user)
- Sample output provided

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite (fast builds, HMR)
- **Tailwind CSS** for styling
- **Firebase** (Auth + Firestore database)
- **Monaco Editor** for code editing
- **Pyodide** for in-browser Python execution
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Node.js + Express**
- **Anthropic Claude API** for AI solutions
- **Express Rate Limit** for API protection
- **CORS** enabled

### Features
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile-first design)
- 🔐 Protected routes (login required)
- 🔥 Firebase Authentication (Email/Password + Google OAuth)
- 💾 User progress tracking in Firestore
- 🎨 Bengali-friendly fonts (Hind Siliguri, Noto Sans Bengali)
- ⚡ Fast performance (lazy loading, code splitting)
- ♿ Accessible (keyboard navigation, screen reader friendly)

## 📂 Project Structure

```
Qustion_solve_web_py/
├── pyshikhi-frontend/          # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── contexts/           # React contexts
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Exercise.jsx
│   │   │   ├── Question.jsx
│   │   │   └── Solve.jsx
│   │   ├── data/               # Sample data
│   │   │   ├── exercises.js    # 10+ exercise examples
│   │   │   └── questions.js    # 12+ practice questions
│   │   ├── config/
│   │   │   └── firebase.js     # Firebase configuration
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── .env.example
│   └── .gitignore
│
└── pyshikhi-backend/           # Express backend
    ├── server.js               # Main server file
    ├── package.json
    ├── .env.example
    └── .gitignore
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Anthropic API key

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication**:
   - Enable Email/Password
   - Enable Google Sign-in
4. Create a **Firestore Database** (Start in production mode)
5. Add Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

6. Get your Firebase config from Project Settings > General > Your apps

### 2. Anthropic API Key

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Create an account or sign in
3. Generate an API key
4. Copy the API key for backend setup

### 3. Frontend Setup

```bash
cd pyshikhi-frontend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env and add your Firebase config:
# VITE_FIREBASE_API_KEY=your_api_key
# VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# VITE_FIREBASE_PROJECT_ID=your_project_id
# VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
# VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
# VITE_FIREBASE_APP_ID=your_app_id
# VITE_API_URL=http://localhost:3001

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:5173`

### 4. Backend Setup

```bash
cd pyshikhi-backend

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env and add your Anthropic API key:
# ANTHROPIC_API_KEY=your_anthropic_api_key
# PORT=3001

# Start backend server
npm start
```

Backend API will be available at: `http://localhost:3001`

## 🎯 Usage

1. **Sign Up / Login**
   - Open `http://localhost:5173`
   - Create an account or sign in with Google
   - You'll be redirected to the dashboard

2. **Exercise Section**
   - Browse topics by clicking on them
   - Read examples with Bengali comments
   - Edit and run code live
   - Mark topics as complete

3. **Question Section**
   - Select a question from the list
   - Filter by difficulty level
   - Write your solution in the code editor
   - Click "Run & Submit" to test
   - Get instant feedback (✅ or ❌)
   - View hints or solutions if needed

4. **AI Solve Section**
   - Paste any Python problem or error
   - Click "Get Solution"
   - Receive complete solution with Bengali comments
   - Run the code to see output
   - Access solution history

## 🔒 Security Features

- ✅ Protected routes (authentication required)
- ✅ API rate limiting (10 requests/minute)
- ✅ Firestore security rules
- ✅ API key stored in backend only (never exposed to frontend)
- ✅ Environment variables for sensitive data
- ✅ CORS enabled for specific origins

## 📊 Performance Optimizations

- ⚡ Code splitting and lazy loading
- ⚡ Pyodide runs Python in browser (no server load)
- ⚡ Monaco Editor loaded on demand
- ⚡ Optimized bundle size with Vite
- ⚡ Responsive images
- ⚡ Dark mode to reduce eye strain
- ⚡ Minimal re-renders with React best practices

## 🎨 UI/UX Features

- 📱 Mobile-first responsive design
- 🌓 Dark/Light mode toggle
- 🎯 Clean, modern interface
- 📊 Progress tracking
- 🔔 Visual feedback for all actions
- ♿ Keyboard accessible
- 🌐 Bengali-friendly fonts
- 🎨 Gradient buttons and smooth transitions

## 📝 Sample Data Included

### Exercises (10+ topics):
1. Variables & Data Types
2. Input & Output
3. Operators
4. Conditional Statements
5. Loops
6. Lists
7. Functions
8. Dictionaries
9. String Operations
10. File Handling

### Questions (12+ problems):
1. Print Hello World
2. Add Two Numbers
3. Check Even or Odd
4. Find Maximum of Three Numbers
5. Print Numbers 1 to 10
6. Sum of First N Natural Numbers
7. Factorial of a Number
8. Reverse a String
9. Count Vowels in a String
10. Check Prime Number
11. Find Length of List
12. Sum of List Elements

## 🐛 Troubleshooting

### Frontend Issues

**Issue**: Firebase authentication not working
- Solution: Check if Firebase config is correct in `.env`
- Verify Firebase Authentication is enabled in console

**Issue**: Pyodide not loading
- Solution: Check internet connection (Pyodide loads from CDN)
- Clear browser cache

### Backend Issues

**Issue**: Claude API returns 401
- Solution: Check if `ANTHROPIC_API_KEY` is correct in `.env`
- Verify API key is active in Anthropic console

**Issue**: CORS error
- Solution: Make sure backend is running on port 3001
- Check `VITE_API_URL` in frontend `.env`

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

### Build for Production

#### Frontend
```bash
cd pyshikhi-frontend
npm run build
```

#### Backend
```bash
cd pyshikhi-backend
# Set NODE_ENV=production in .env
npm start
```

## 🤝 Contributing

Feel free to fork, improve, and submit pull requests!

## 📧 Support

For issues or questions, please create an issue in the repository.

---

<div align="center">
  <p>Made with ❤️ for Bengali Python learners</p>
  <p>পাইথন শিখুন, দক্ষ হয়ে উঠুন! 🚀</p>
</div>
