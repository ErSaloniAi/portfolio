import express from 'express';
import axios from 'axios';
import Contact from '../models/Contact.js';

const router = express.Router();

// Structured information for the 8 prioritized projects
const PRIORITIZED_PROJECTS = [
  {
    name: 'CampusXHire',
    repoName: 'CampusXhire',
    description: 'A Flask-based recruitment web application designed to connect students with companies through a streamlined hiring process.',
    techStack: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'HTML5', 'CSS3', 'JavaScript', 'Jinja2'],
    liveLink: 'https://web-production-e0223.up.railway.app/',
    repoLink: 'https://github.com/ErSaloniAi/CampusXhire',
    readmeSummary: 'CampusXHire is a Flask-based recruitment platform designed to connect students with companies. It supports student registration with OTP verification, secure login/logout, profile updates, resume/video resume uploads, and portfolio links. It features skill management using SQLAlchemy relationships and a smart job recommendation system based on skill overlap percentages.'
  },
  {
    name: 'CareerPath',
    repoName: 'CareerPath',
    description: 'An integrated career development ecosystem helping students discover their strengths, build profiles, and find matching jobs.',
    techStack: ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap', 'SQLite', 'MySQL'],
    liveLink: 'https://careerpath.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/CareerPath',
    readmeSummary: 'CareerPath is an integrated ecosystem that combines CampusXHire (recruitment) with CareerLens (career assessment & guidance). It empowers students to discover strengths through adaptive 20-question assessments, view performance reports, track historical progress, build professional profiles, and apply to matching jobs with confidence.'
  },
  {
    name: 'VendorBridge',
    repoName: 'VendorBridge',
    description: 'A comprehensive Django-based Vendor Management & Procurement System designed for enterprise procurement operations.',
    techStack: ['Python', 'Django', 'SQLite', 'PostgreSQL', 'Pillow'],
    liveLink: 'https://vendorbridge.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/VendorBridge',
    readmeSummary: 'VendorBridge streamlines vendor onboarding, Request for Quotation (RFQ) management, purchase order tracking, and invoice processing. It features role-based access control, document verification workflows, invoice creation, in-app notifications, and vendor performance analytics dashboards.'
  },
  {
    name: 'EstateHub',
    repoName: 'EstateHub',
    description: 'A robust property management and search system implementing advanced Java data structures and database systems.',
    techStack: ['Java', 'MySQL', 'JDBC', 'Data Structures', 'SMTP'],
    liveLink: '',
    repoLink: 'https://github.com/ErSaloniAi/EstateHub',
    readmeSummary: 'EstateHub is a property management database system supporting buyers, sellers, and administrators. It handles user registration, property listings, transaction logging, and home loan processing with automatic EMI calculation. It also includes integrated Gmail SMTP notification services and file management.'
  },
  {
    name: 'AI-dev-assistant',
    repoName: 'AI-dev-assistant',
    description: 'An open-source AI-powered developer assistant that detects bugs, explains code in plain English, and suggests improvements.',
    techStack: ['Python', 'FastAPI', 'Pydantic', 'Pytest', 'Ruff', 'HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://qyverixai.onrender.com',
    repoLink: 'https://github.com/ErSaloniAi/AI-dev-assistant',
    readmeSummary: 'AI-dev-assistant is a code analysis workspace. Paste any code and get language detection, a plain-English summary, complexity estimates, and an inventory of functions/classes. It also checks for 40+ bug patterns across Python, JS, TS, Java, and C++, scoring your code and providing actionable suggestions.'
  },
  {
    name: 'InternPay',
    repoName: 'InternPay',
    description: 'A blockchain-powered escrow platform designed to eliminate payment ghosting in freelance work and internships.',
    techStack: ['React', 'Next.js', 'Solidity', 'Polygon', 'Hardhat', 'Node.js', 'PostgreSQL', 'Prisma'],
    liveLink: 'https://internpay.vercel.app/',
    repoLink: 'https://github.com/ErSaloniAi/InternPay',
    readmeSummary: 'InternPay combines AI-first automated verification, decentralized smart contract escrows on the Polygon network, and a human-in-the-loop dispute resolution mechanism. It ensures students and freelancers are paid fairly for their deliverables while protecting companies from substandard submissions.'
  },
  {
    name: 'VyaparBuddy',
    repoName: 'VyaparBuddy',
    description: 'An AI-powered business intelligence, bookkeeping, and inventory management platform for Indian SMEs.',
    techStack: ['React', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Gemini API'],
    liveLink: 'https://vyaparbuddy.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/VyaparBuddy',
    readmeSummary: 'VyaparBuddy replaces manual bookkeeping and ledger systems with a unified dashboard supporting English, Hindi, and Gujarati. It features a Gemini-powered AI assistant for natural language inventory querying, customer credit tracking (Khata), GST reporting, and automated restock alerts.'
  },
  {
    name: 'Arbverse',
    repoName: 'Arbverse',
    description: 'A modern, responsive Web3 educational platform and cryptocurrency price tracking dashboard.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'CoinGecko API'],
    liveLink: 'https://ersaloniai.github.io/Arbverse/',
    repoLink: 'https://github.com/ErSaloniAi/Arbverse',
    readmeSummary: 'Arbverse is a 3-page responsive educational website helping users learn blockchain fundamentals and Arbitrum Layer 2 benefits. It integrates the CoinGecko API to track real-time cryptocurrency prices for Bitcoin and Ethereum, featuring positive and negative price change indicators.'
  }
];

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please provide name, email, and message.' });
    }

    const newContact = new Contact({
      name,
      email,
      subject: subject || 'No Subject',
      message
    });

    await newContact.save();
    return res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
});

// GET /api/projects
router.get('/projects', async (req, res) => {
  const username = process.env.GITHUB_USERNAME || 'ErSaloniAi';
  const token = process.env.GITHUB_TOKEN;

  try {
    const headers = { 'User-Agent': 'Portfolio-App' };
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    // Call GitHub API with a 4-second timeout
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers,
      timeout: 4000
    });

    const githubRepos = response.data;

    // Merge GitHub details (stars, forks, updated_at, actual urls) with our rich details
    const mergedProjects = PRIORITIZED_PROJECTS.map((project, index) => {
      const match = githubRepos.find(
        (repo) => repo.name.toLowerCase() === project.repoName.toLowerCase()
      );

      if (match) {
        return {
          ...project,
          stars: match.stargazers_count,
          forks: match.forks_count,
          repoLink: match.html_url,
          updatedAt: match.updated_at,
          index: String(index + 1).padStart(2, '0')
        };
      }

      // If no match, return project as-is with default stats
      return {
        ...project,
        stars: 0,
        forks: 0,
        updatedAt: new Date().toISOString(),
        index: String(index + 1).padStart(2, '0')
      };
    });

    return res.json({ success: true, source: 'github', projects: mergedProjects });
  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited. Serving local fallback projects data:', error.message);
    
    // Add default stats and numbers to the local fallback projects
    const fallbackProjects = PRIORITIZED_PROJECTS.map((project, index) => ({
      ...project,
      stars: 0,
      forks: 0,
      updatedAt: new Date().toISOString(),
      index: String(index + 1).padStart(2, '0')
    }));

    return res.json({ success: true, source: 'local', projects: fallbackProjects });
  }
});

export default router;
