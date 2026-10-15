const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Anthropic = require('@anthropic-ai/sdk');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting - 10 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute
  message: {
    error: 'Too many requests, please try again later.',
    error_bn: 'অনেক বেশি অনুরোধ, একটু পরে আবার চেষ্টা করুন।',
  },
});

app.use('/api/solve', limiter);

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// System prompt for Claude
const SYSTEM_PROMPT = `You are a Python tutor for Bengali learners. When given a Python problem or error:

1. Provide a complete, working Python solution
2. Add a Bengali comment (# বাংলা কমেন্ট) on EVERY SINGLE LINE explaining what that line does
3. Keep code clean, simple, and beginner-friendly
4. Provide a brief Bengali explanation (2-3 sentences) before the code
5. If applicable, provide sample output

Response format (JSON):
{
  "explanation": "Bengali explanation of the approach",
  "code": "Python code with Bengali comments on every line",
  "sampleOutput": "Expected output of the code"
}

Guidelines:
- Always add Bengali comments on every important line
- Use simple, clear Bengali language
- Explain concepts for beginners
- Provide correct, tested solutions
- Keep code readable and well-formatted`;

// API endpoint to solve problems
app.post('/api/solve', async (req, res) => {
  try {
    const { problem } = req.body;

    if (!problem || typeof problem !== 'string') {
      return res.status(400).json({
        error: 'Problem description is required',
        error_bn: 'সমস্যার বর্ণনা প্রয়োজন',
      });
    }

    if (problem.length > 2000) {
      return res.status(400).json({
        error: 'Problem description is too long (max 2000 characters)',
        error_bn: 'সমস্যার বর্ণনা অনেক বড় (সর্বোচ্চ ২০০০ অক্ষর)',
      });
    }

    // Call Claude API
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: problem,
        },
      ],
    });

    // Extract the response text
    const responseText = message.content[0].text;

    // Try to parse as JSON first
    let solution;
    try {
      solution = JSON.parse(responseText);
    } catch (parseError) {
      // If not JSON, try to extract code blocks
      const codeMatch = responseText.match(/```python\n([\s\S]*?)\n```/);
      const code = codeMatch ? codeMatch[1] : responseText;

      solution = {
        explanation: 'এই সমস্যার সমাধান নিচে দেওয়া হলো। প্রতিটি লাইনে বাংলা কমেন্ট আছে।',
        code: code,
        sampleOutput: '',
      };
    }

    // Ensure all fields exist
    solution.explanation = solution.explanation || 'সমাধান পাওয়া গেছে।';
    solution.code = solution.code || '# কোড পাওয়া যায়নি';
    solution.sampleOutput = solution.sampleOutput || '';

    res.json(solution);
  } catch (error) {
    console.error('Error calling Claude API:', error);

    // Check for specific API errors
    if (error.status === 429) {
      return res.status(429).json({
        error: 'Rate limit exceeded. Please try again later.',
        error_bn: 'সীমা অতিক্রম করেছে। একটু পরে চেষ্টা করুন।',
      });
    }

    if (error.status === 401) {
      return res.status(500).json({
        error: 'API configuration error. Please contact support.',
        error_bn: 'API কনফিগারেশন সমস্যা। সাপোর্টে যোগাযোগ করুন।',
      });
    }

    res.status(500).json({
      error: 'Failed to process your request. Please try again.',
      error_bn: 'আপনার অনুরোধ প্রক্রিয়া করতে ব্যর্থ। আবার চেষ্টা করুন।',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'PyShikhi API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ PyShikhi backend server running on port ${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/solve`);
  
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('⚠️  WARNING: ANTHROPIC_API_KEY not found in environment variables');
  }
});
