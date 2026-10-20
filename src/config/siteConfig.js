/**
 * Single source of truth for everything personal on this site.
 * Edit values here; components read from this file only.
 *
 * Anything marked TODO is intentionally left blank/optional.
 * Facts below come from SHLOK_CV_01.pdf and the links shared in chat.
 */

const siteConfig = {
  meta: {
    title: "Shlok Warulkar — Full-Stack (MERN) Developer",
    description:
      "Portfolio of Shlok Warulkar, an Information Technology engineering student in Pune building MERN-stack web apps with REST APIs, MongoDB and Gemini API integrations.",
    // TODO: after deploying, set your real URL (needed for social-share previews).
    siteUrl: "",
    ogImage: "/images/shlok.jpg",
  },

  person: {
    name: "Shlok Warulkar",
    wordmark: "Shlok Warulkar",
    initials: "SW",
    role: "Information Technology Engineering Student",
    headline: "Aspiring Full-Stack Developer | MERN Stack Developer",
    location: "Pune, Maharashtra, India",
    photo: {
      webp: "/images/shlok.webp",
      small: "/images/shlok-sm.webp",
      fallback: "/images/shlok.jpg",
      alt: "Portrait of Shlok Warulkar in a blue suit",
    },
  },

  intro:
    "I enjoy building practical web applications: clean interfaces on the front, dependable REST APIs behind them, and the occasional AI feature where it genuinely helps. I like turning a real problem into something people can actually use.",

  about: [
    "I'm an Information Technology engineering student at Dr. D. Y. Patil College of Engineering, Akurdi, Pune, with a current CGPA of 9.04. Full-stack web development is where I've spent most of my time outside the classroom.",
    "I've built React interfaces, written REST APIs in Node and Express, modelled data in MongoDB, and wired in the Google Gemini API for natural-language features. From December 2025 to February 2026 I worked remotely as a React Frontend Developer Intern at Elite Softwares.",
    "I'm still learning. I keep sharpening my problem-solving through data structures and algorithms practice, and I'm looking for a role where I can keep building and learn from a team.",
  ],

  links: {
    github: "https://github.com/warulkarshlok-hash",
    linkedin: "https://www.linkedin.com/in/shlok-warulkar-275425321",
    leetcode: "https://leetcode.com/u/ShlokW/",
    email: "warulkarshlok@gmail.com",
    // TODO (optional): phone is on your resume but not shown on the site by default.
    // Set a value and flip showPhone to true if you want it public.
    phone: "",
    showPhone: false,
  },

  resume: {
    file: "/resume/Shlok_Warulkar_Resume.pdf",
    downloadName: "Shlok_Warulkar_Resume.pdf",
  },

  // Group labels and items follow the resume's Technical Skills section.
  skills: [
    { group: "Languages", items: ["Java", "C++", "SQL", "JavaScript"] },
    {
      group: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
    },
    {
      group: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "API integration",
        "JWT authentication",
      ],
    },
    { group: "Databases", items: ["MongoDB", "MySQL"] },
    {
      group: "CS core",
      items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
    },
    {
      group: "Tools & integrations",
      items: ["Git", "GitHub", "Postman", "Axios", "Google Gemini API", "i18next"],
    },
  ],

  projects: [
    {
      id: "invoxa",
      name: "Invoxa AI",
      kind: "AI-powered invoice management platform",
      summary:
        "A full-stack platform for managing products, customers, billing and payments. You can paste plain text and have Gemini draft the invoice, get short AI insights on the dashboard, and switch the interface language.",
      points: [
        "10+ REST APIs in Node and Express covering JWT authentication and the whole invoice lifecycle: create, update, delete and payment tracking.",
        "Natural-language invoice generation, AI business insights and multilingual support through the Google Gemini API and i18next.",
        "Responsive React and Tailwind interface with a dashboard for totals, paid and unpaid amounts, and recent invoices.",
      ],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Gemini API"],
      github: "https://github.com/warulkarshlok-hash/Invoxa-AI",
      live: "https://invoxa-ai-shlok.vercel.app/",
      shots: [
        {
          src: "/images/invoxa-dashboard.webp",
          label: "Dashboard",
          alt: "Invoxa dashboard showing total invoices, paid and unpaid amounts, AI insights and recent invoices",
        },
        {
          src: "/images/invoxa-landing.webp",
          label: "Landing page",
          alt: "Invoxa landing page with the headline AI-Powered Invoicing, Made Effortless",
        },
      ],
    },
    {
      id: "second-brain",
      name: "Second Brain",
      kind: "Personal knowledge management platform",
      summary:
        "One place to save YouTube videos, articles, links and notes, then search them or ask questions and get answers drawn only from what you saved, with citations.",
      points: [
        "20+ reusable React components; CRUD across 4+ resource types on Node, Express and MongoDB.",
        "Tagging, categories, favorites and pinning, plus a markdown reader with word counts and reading times.",
        "“Ask My Brain”, a Gemini-powered Q&A over your saved items, with Auth0 sign-in and per-user data isolation.",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Express.js", "MongoDB", "Auth0", "Gemini API"],
      github: "https://github.com/warulkarshlok-hash/Second-Brain",
      live: "https://second-brain-byshlok.vercel.app/",
      shots: [
        {
          src: "/images/secondbrain-vault.webp",
          label: "Vault",
          alt: "Second Brain vault with saved YouTube video, notes and article cards, filters and search",
        },
        {
          src: "/images/secondbrain-landing.webp",
          label: "Landing page",
          alt: "Second Brain landing page with the headline Your Personal Digital Vault, Supercharged by AI",
        },
      ],
    },
  ],

  experience: [
    {
      role: "React Frontend Developer Intern",
      org: "Elite Softwares",
      place: "Remote",
      period: "Dec 2025 – Feb 2026",
      stack: "MERN Stack · Git/GitHub · REST APIs",
      points: [
        "Built and maintained responsive UI components in React.js with the development team, for a live project.",
        "Debugged and fixed 10+ frontend bugs and UI inconsistencies, and integrated REST APIs with Axios to show dynamic data.",
        "Took part in code reviews and daily stand-ups, working in an Agile, collaborative workflow.",
      ],
    },
  ],

  education: [
    {
      title: "B.E. in Information Technology",
      place: "Dr. D. Y. Patil College of Engineering, Akurdi, Pune",
      period: "2023 – Present",
      score: "CGPA 9.04",
    },
    {
      title: "HSC (12th)",
      place: "MJCOS, Maharashtra State Board",
      period: "2023",
      score: "87.88%",
    },
    {
      title: "SSC (10th)",
      place: "RLSES, Maharashtra State Board",
      period: "2021",
      score: "93.20%",
    },
  ],

  beyondCode: [
    {
      title: "ITESA Sports Lead",
      text: "Our team won the General Championship for the IT Department for the first time in 7 years. We organized 10+ inter-departmental sporting events and coordinated 100+ student-athletes.",
    },
    {
      title: "Certified Full Stack Web Developer",
      text: "Udemy, Dr. Angela Yu's Complete Web Development Bootcamp.",
    },
    {
      title: "Problem solving",
      text: "400+ DSA problems solved across LeetCode, Codeforces and GeeksforGeeks combined.",
    },
  ],

  contact: {
    invitation:
      "I'm open to internships and junior full-stack roles, and happy to talk about projects or collaborate on something small. If you're hiring or building, email is the quickest way to reach me.",
  },

  footer: {
    signoff: "Designed and built by hand with React.",
  },
};

export default siteConfig;
