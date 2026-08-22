import express from 'express';
import axios from 'axios';
import Contact from '../models/Contact.js';

const router = express.Router();

// Structured information for the 8 prioritized projects
const PRIORITIZED_PROJECTS = [
  {
    name: 'CampusXHire',
    repoName: 'CampusXhire',
    description: 'A comprehensive campus recruitment portal streamlining the connection between students, recruiters, and college administrators.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://campusxhire.demo.com', // Placeholder
    repoLink: 'https://github.com/ErSaloniAi/CampusXhire',
    readmeSummary: 'CampusXHire is a centralized platform designed to manage the end-to-end recruitment process on college campuses. It supports student profile builder, resume parsing, recruiter posting boards, test scheduling, and shortlisting dashboards. The application eliminates paper-based workflow and simplifies job application tracking.'
  },
  {
    name: 'CareerPath',
    repoName: 'CareerPath',
    description: 'An AI-powered career counseling system helping students analyze their skills, explore careers, and chart educational pathways.',
    techStack: ['Python', 'Flask', 'Machine Learning', 'Pandas', 'HTML', 'CSS'],
    liveLink: 'https://careerpath.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/CareerPath',
    readmeSummary: 'CareerPath uses Machine Learning classification models to recommend optimal career paths for engineering students based on their grades, technical skills, interest assessments, and extracurricular activities. The system features a simple Flask dashboard with data visualizations using Chart.js.'
  },
  {
    name: 'VendorBridge',
    repoName: 'VendorBridge',
    description: 'A secure vendor management portal facilitating communication, quotation bidding, and purchase order tracking.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://vendorbridge.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/VendorBridge',
    readmeSummary: 'VendorBridge acts as an intermediary database between supply chain coordinators and external vendors. It supports user role management (Buyer, Vendor, Admin), request for quotes (RFQs), bidding modules, order dispatch statuses, and electronic invoice storage.'
  },
  {
    name: 'EstateHub',
    repoName: 'EstateHub',
    description: 'A robust property management and search system implementing advanced Java data structures and database systems.',
    techStack: ['Java', 'Swing', 'JDBC', 'MySQL', 'Data Structures'],
    liveLink: '',
    repoLink: 'https://github.com/ErSaloniAi/EstateHub',
    readmeSummary: 'EstateHub is a desktop property listing database application. It leverages key Java data structures (HashMaps, Binary Trees for fast search filtering) and couples with a MySQL backend using JDBC. It provides real estate agents with modules to list properties, schedule viewings, and track customer inquiries.'
  },
  {
    name: 'Resume Builder',
    repoName: 'Resume-Builder', // Fallback name
    description: 'An interactive, client-side resume builder enabling real-time editing, formatting, and high-quality PDF exporting.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PDFKit'],
    liveLink: 'https://resume-builder.demo.com',
    repoLink: 'https://github.com/ErSaloniAi',
    readmeSummary: 'This Resume Builder allows users to construct high-quality, ATS-optimized professional resumes using visual templates. Developed as an editorial single-page React app, it outputs clean print layouts using a custom PDF generation engine, ensuring pixel-perfect spacing.'
  },
  {
    name: 'InternPay',
    repoName: 'InternPay',
    description: 'A streamlined payroll management utility for interns, providing attendance tracking and automatic stipend calculation.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://internpay.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/InternPay',
    readmeSummary: 'InternPay automates the processing of monthly stipends for project-based interns. It incorporates a calendar-based attendance logger, tax and leave deduction calculator, automated email generation of payslips, and a dashboard for finance administrators to track payouts.'
  },
  {
    name: 'VyaparBuddy',
    repoName: 'VyaparBuddy',
    description: 'A lightweight billing, invoice, and inventory tracking application optimized for small business operations.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    liveLink: 'https://vyaparbuddy.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/VyaparBuddy',
    readmeSummary: 'VyaparBuddy (Business Companion) is a modern web dashboard designed to replace manual ledger books. It offers barcode scanning support, real-time inventory count alerts, invoice creation and downloading, expense tracking, and sales analytics reports.'
  },
  {
    name: 'Arbverse',
    repoName: 'Arbverse',
    description: 'A Web3 cryptocurrency arbitrage tracking portal monitoring price differentials across decentralized exchanges.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Web3.js', 'Solidity', 'REST APIs'],
    liveLink: 'https://arbverse.demo.com',
    repoLink: 'https://github.com/ErSaloniAi/Arbverse',
    readmeSummary: 'Arbverse is a proof-of-concept utility that interfaces with Uniswap and SushiSwap smart contracts. It monitors token price pairs in real-time, displays gas estimation costs, and visualizes arbitrage pathways (buy low, sell high opportunities) in an editorial-styled grid.'
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
