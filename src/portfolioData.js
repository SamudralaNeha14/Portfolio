const portfolioData = {
  personal: {
    name: "Samudrala Neha",
    title: "DATA ANALYST | GEN AI ENGINEER| ML ENTHUSIAST",
    email: "neha.samudrala02@gmail.com",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/neha-samudrala-1402/",
    github: "https://github.com/SamudralaNeha14",
    bio: "Motivated Computer Science graduate with hands-on experience in software development, data analytics, machine learning, and emerging GenAI technologies. Proficient in Python, SQL, and modern web development, with growing expertise in LLMs, RAG pipelines, AI agents, and prompt engineering. Built scalable tools and intelligent ML/LLM applications across internships and academic projects. Strong problem-solver with a drive to design efficient, data-driven, and AI-powered systems"
  },
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Keshav Memorial Institute of Technology",
      year: "2020 - 2024"
    },
    {
      degree: "High School Diploma",
      institution: "Sri Gynavapi Junior College",
      year: "2018 - 2020"
    }
  ],
  
  skills: {
    "Languages": ["Python", "SQL", "Java", "JavaScript", "HTML/CSS"],
    "GenAI & LLMs": ["Prompt Engineering", "RAG", "LLM Evaluation", "LangChain", "LangGraph", "Agents", "Groq API"],
    "Databases": ["MySQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["GCP (basics)", "Docker", "Git", "CI/CD (beginner)", "Azure(Basics)"],
    "ML & Analytics": ["Scikit-learn", "Pandas", "NumPy", "CNN/RNN", "Streamlit"],
    "Tools": ["FastAPI", "Tableau", "Power BI"]
  },
  
  certifications: [
    {
      name: "Smart India Hackathon 2022 – Finalist",
      issuer: "SIH-2022",
      date: "Aug 2022",
      url: "https://drive.google.com/file/d/1_GSk9n9zo90DlHRZVWDdmg6Dv4-lfaoe/view"
    },
    {
      name: "Google Cloud Certified Generative AI Leader",
      issuer: "Google Cloud",
      date: "Dec 2025",
      url: "https://drive.google.com/file/d/1MYykoVeW3eCmqTv9BM82WqIU36OAx0sF/view"
    },
    {
      name: "Data Analytics",
      issuer: "Career Ninja",
      date: "Sep 2024",
      url: "https://drive.google.com/file/d/1krltTFqNgsxZJsfjo5c4-zysFzR6Y3kE/view"
    },
    {
      name: "Freedom with AI",
      issuer: "Freedom with AI",
      date: "Nov 2024",
      url: "https://drive.google.com/file/d/1R7NQi11UmdxbML2EFSmxjL72fhKPZuv9/view"
    },
  ],
  
  projects: [
    {
      title: "Kisan Mitra",
      description: "Built a content-based Movie Recommendation System using Python, ML, and Streamlit. Deployed an interactive UI for real-time suggestions based on user preferences. Applied analytical skills to fine-tune the model and rigorously tested it to reduce errors and improve user experience.",
      tech: ["NODE.JS", "MONGODB", "EXPRESS.JS"],
      featured: true
    },
    {
      title: "Deepfake Detection System",
      description: "Developed a deepfake detection pipeline leveraging CNNs for spatial feature extraction from facial images and RNNs for temporal modeling of frame sequences in videos. Integrated the model into a Streamlit-based application enabling image/video uploads and instant prediction results.",
      tech: ["Python", "CNN", "RNN", "Streamlit"],
      demo: "https://ntn-deepfake-detector.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/DeepFakeDetection",
      featured: true
    },
    {
      title: "Movie Recommendation System",
      description: "Built a content-based Movie Recommendation System using Python, ML, and Streamlit. Deployed an interactive UI for real-time suggestions based on user preferences. Applied analytical skills to fine-tune the model and rigorously tested it to reduce errors and improve user experience.",
      tech: ["Python", "Streamlit", "Machine Learning", "Pandas"],
      github: "https://github.com/SamudralaNeha14/Movie-Recomendation",
      featured: true
    },
    {
      title: "NEWS-BOT AGENT",
      description: " Developed an AI-powered News-Bot Agent using LangChain and Groq API to fetch and summarize real-time news articles based on user queries. Implemented advanced prompt engineering techniques to enhance the bot's contextual understanding and response accuracy. Deployed the application on Streamlit for an interactive user experience.",
      tech: ["Python", "Streamlit", "LangChain", "Groq API"],
      demo: "https://newsbot-assistant.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/NEWSBOT",
      featured: true
    },
    {
      title: "RESUMAKE",
      description: " Developed a Streamlit-based web app for building ATS-friendly resumes, featuring an ATS scanner to evaluate compatibility and a Chatbot that provides real-time resume guidance. The interactive platform allows users to create, edit, and optimize professional resumes efficiently.",
      tech: ["Python", "Streamlit", "LangChain", "Groq API"],
      demo: "https://resumake.streamlit.app/",
      github: "https://github.com/SamudralaNeha14/RESUMAKE.git",
      featured: true
    },
  ],
  
  experience: [
    {
      title: "Intern",
      company: "Inam Solutions",
      period: "June 2024 - Dec 2024",
      location: "Hyderabad, India",
      achievements: [
        "Built automated data pipelines using Python and SQL to process 150K+ records, reducing reporting time by 30% and supporting ETL integration with MySQL dashboards.",
        "Prototyped a customer churn prediction model and ensured data quality and standardization across analytics workflows."
      ]
    }
  ],
  
  // Email configuration for contact form
  emailConfig: {
    yourEmail: "neha.samudrala02@gmailcom",
    serviceId: "service_kyr9uhg",      // Get from EmailJS dashboard
    templateId: "template_pcv7vsc",     // Get from EmailJS dashboard
    publicKey: "P-KMjzHvywLhQsyoHcBLK"        // Get from EmailJS dashboard
  }
};

export default portfolioData;