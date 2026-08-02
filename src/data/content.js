export const profile = {
  name: "Syed Kamil Taqi Zaidi",
  callsign: "K. ZAIDI",
  roles: ["AI/ML Engineer", "Full-Stack Developer", "Space Enthusiast"],
  location: "Lahore, Pakistan",
  email: "zaidikamil9@gmail.com",
  linkedin: "https://linkedin.com/in/syedkamilzaidi",
  github: "https://github.com/kamilcodes14",
  summary:
    "I'm a Full-Stack and AI/ML Engineer with a hands-on grip on the full pipeline — training and evaluating machine learning models, integrating LLMs and building Generative AI pipelines, then wrapping it all in the React and FastAPI interfaces people actually use. I care about writing clean, dependable code, and I like using what I know to genuinely help people: whether that's a small business that needs a website or a real problem someone's trying to solve with data. If you need a hand with something like that, feel free to reach out.",
  achievement: "3rd Nationally — National Science Olympiad, Computer Science",
};

export const stats = [
  { value: "5", label: "Live Projects" },
  { value: "3", label: "Internships" },
  { value: "98%", label: "Best Model Accuracy" },
  { value: "3rd", label: "National Science Olympiad" },
];

export const education = {
  school: "University of Management and Technology (UMT)",
  location: "Lahore, Pakistan",
  degree: "B.S. Computer Science",
  gpa: "3.1 / 4.0",
  expected: "Expected October 2028",
  coursework: [
    "Database Systems",
    "Computer Networks",
    "Computer Architecture",
    "Theory of Automata",
    "Professional Practices",
  ],
};

export const about = {
  hook: "I build production-ready software on Earth — and explore astronomical data beyond it.",
  bio: [
    "As a 4th-semester Computer Science student at UMT Lahore, my core focus is building end-to-end AI/ML pipelines and full-stack web products. Currently, I work as an AI/ML Engineer at US-based Product Management Accelerator, taking models from raw notebooks to deployed, user-facing applications using React and FastAPI.",
  ],
  sideHeading: "On the side — Astrophysics & Space Data",
  sideBio: [
    "Beyond core software engineering, I have a deep interest in space and astronomy (following JWST, Artemis, and exoplanet research). I channel this interest into personal data science experiments — applying machine learning models to astronomical datasets and building interactive space simulations.",
  ],
  facts: [
    { label: "Based in", value: "Lahore, Pakistan" },
    { label: "Studying", value: "B.S. Computer Science, UMT" },
    { label: "Focus", value: "AI/ML + Full-Stack" },
    { label: "Also into", value: "Astronomy, space missions" },
  ],
};

export const experience = [
  {
    org: "Product Management Accelerator (PMA)",
    role: "AI/ML Engineer",
    location: "Remote, USA",
    period: "Present",
    current: true,
    bullets: [
      "Working as an AI/ML Engineer at a US-based company, contributing to AI/ML engineering initiatives.",
    ],
  },
  {
    org: "CodeAlpha",
    role: "Machine Learning Intern",
    location: "Remote, India",
    period: "2026 – Present",
    current: true,
    bullets: [
      "Building end-to-end ML pipelines — data cleaning, feature engineering, model training, and evaluation — shipped as interactive, deployable demos rather than notebooks.",
      "Trained and benchmarked Logistic Regression, Random Forest, and Gradient Boosting for loan-risk scoring (78% accuracy) on the UCI German Credit dataset, and 4 classifiers across 3 disease-prediction datasets (up to 98% accuracy), each with 5-fold cross-validation.",
    ],
  },
  {
    org: "Systems Limited",
    role: "AI Intern",
    location: "Lahore, Pakistan",
    period: "2025",
    current: false,
    bullets: [
      "Built and integrated LLM-powered automation solutions into enterprise workflows using Generative AI APIs, handling prompt engineering, response parsing, and pipeline integration.",
      "Developed Python automation scripts to eliminate repetitive manual workflows, and collaborated with senior developers in a professional SDLC environment applying best practices for code quality and delivery.",
    ],
  },
];

export const projects = [
  {
    name: "Space Signal Receiver",
    tag: "Personal Project",
    tech: ["Python", "NumPy", "Matplotlib", "Flask"],
    blurb:
      "A signal-detection pipeline built the way real SETI/radio-astronomy software works: capture, detect, visualize. Runs a de-doppler drift search on simulated spectrogram data — the same core technique turbo_seti uses on real Breakthrough Listen telescope data — with a Flask web UI to run a capture and view the waterfall plot. Built to plug into a real RTL-SDR dongle later; one line changes.",
    live: "https://space-signal-receiver.vercel.app/",
    github: "https://github.com/kamilcodes14/space-signal-receiver",
  },
  {
    name: "F.R.I.D.A.Y. — AI Voice Assistant",
    tag: "Personal Project",
    tech: ["Python", "Tkinter", "Web Speech API", "Claude API"],
    blurb:
      "A personal AI voice assistant inspired by Iron Man's AI assistant — a Python/Tkinter desktop HUD and a browser version with an animated canvas HUD, powered by the Claude API. Low-latency wake-word interaction (instant double-clap on desktop, one-click in-browser), plus a mock interview coach refined through repeated self-testing.",
    live: "https://friday-jpx4fu2im-kamilcodes14s-projects.vercel.app/",
    github: "https://github.com/kamilcodes14/friday",
  },
  {
    name: "WeatherApp — PM Accelerator Assessment",
    tag: "Technical Assessment",
    tech: ["React", "FastAPI", "Supabase"],
    blurb:
      "A full-stack weather app with real-time conditions and 5-day forecasts via the OpenWeatherMap API. GPS-based location detection, full CRUD on saved queries backed by Supabase (Postgres), and data export in JSON, CSV, XML, and Markdown.",
    live: "https://weather-app-pm-accelerator-4a9a.vercel.app/",
    github: "https://github.com/kamilcodes14/weather-app-pm-accelerator",
  },
  {
    name: "Disease Prediction from Medical Data",
    tag: "CodeAlpha ML Internship",
    tech: ["Python", "Scikit-learn", "XGBoost"],
    blurb:
      "ML system predicting Diabetes, Heart Disease, and Breast Cancer risk across 4 classifiers per condition. Best model per dataset reaches 98% test accuracy on Breast Cancer, 82% on Heart Disease, and 75% on Diabetes. Includes an OCR image-upload feature for lab reports.",
    live: "https://disease-prediction-app-7w65-okm9gpedq-kamilcodes14s-projects.vercel.app/",
    github: "https://github.com/kamilcodes14/CodeAlpha_DiseasePrediction",
  },
  {
    name: "Smart Parking Allocation & Zone Management",
    tag: "Systems Project",
    tech: ["C++"],
    blurb:
      "Console-based allocation system managing parking slots across zones, with cross-zone fallback when a preferred zone is full. Request state machine (Pending → Allocated → Cancelled) with a rollback manager, modeled with an object-oriented architecture.",
    live: "https://smart-parking-system-indol-rho.vercel.app/",
    github: "https://github.com/kamilcodes14/smart-parking-system",
  },
  {
    name: "Credit Scoring Model",
    tag: "CodeAlpha ML Internship",
    tech: ["Python", "Scikit-learn", "Pandas"],
    blurb:
      "Credit scoring model on the UCI German Credit dataset (1,000 applicants). Benchmarked Logistic Regression, Random Forest, and Gradient Boosting — improved accuracy from 65.5% baseline to 78%, F1-score to 0.85. Ships with an interactive browser-based demo.",
    live: null,
    github: "https://github.com/kamilcodes14/CodeAlpha_CreditScoringModel",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL", "x86 Assembly"],
  },
  {
    category: "AI / LLM",
    items: [
      "LLM API Integration (OpenAI, Gemini, Anthropic)",
      "Prompt Engineering",
      "Generative AI Pipelines",
    ],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "ML / DL",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "XGBoost"],
  },
  {
    category: "Tools & Databases",
    items: ["Git", "MySQL", "SQL Server", "Figma", "VS Code"],
  },
];

export const nav = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];
