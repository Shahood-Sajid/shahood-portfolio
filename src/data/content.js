export const personalInfo = {
  name: "Your Full Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  bio: `I'm a passionate developer with X years of experience...
        
        Throughout my career, I've worked with startups and enterprises...
        
        When I'm not coding, I explore new technologies and contribute to open-source.`,
  resumeUrl: "/resume.pdf",
  availability: "Available for freelance",
  profileImage: "/images/profile.jpg",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  upwork: "https://www.upwork.com/freelancers/yourprofile",
  twitter: "",
};

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Education", href: "education" },
  { name: "Skills", href: "skills" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Contact", href: "contact" },
];

export const experiences = [
  {
    id: 1,
    company: "Company Name",
    title: "Senior Developer",
    type: "Full-time",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Led development of customer-facing apps serving 100K+ users",
      "Architected microservices reducing response times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    company: "Previous Company",
    title: "Full Stack Developer",
    type: "Full-time",
    startDate: "Jun 2020",
    endDate: "Dec 2022",
    location: "New York, NY",
    description: [
      "Built and maintained multiple client websites",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to improve UX",
    ],
    technologies: ["JavaScript", "React", "Python", "Docker"],
  },
];

export const education = [
  {
    id: 1,
    degree: "BS in Computer Science",
    institution: "University Name",
    startYear: "2016",
    endYear: "2020",
    location: "City, Country",
    achievements: ["GPA: 3.8/4.0", "Dean's List"],
  },
];

export const skills = {
  technical: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "PostgreSQL", level: 80 },
  ],
  tools: ["Git", "Docker", "AWS", "Figma", "VS Code"],
  soft: ["Problem Solving", "Communication", "Team Collaboration"],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce with payments and admin dashboard.",
    image: "/images/projects/project1.png",
    technologies: ["React", "Node.js", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates.",
    image: "/images/projects/project2.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecast and location-based updates.",
    image: "/images/projects/project3.png",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
  },
];

export const upworkProfile = {
  profileUrl: "https://www.upwork.com/freelancers/yourprofile",
  jobSuccess: 100,
  totalEarnings: "$10K+",
  totalHours: 500,
  badge: "Top Rated",
  completedJobs: 25,
};

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    title: "CEO",
    company: "TechStartup Inc.",
    text: "Exceptional work! Delivered ahead of schedule with outstanding quality.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "Digital Agency",
    text: "Great communication and technical skills. Would definitely hire again.",
    rating: 5,
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Job Success", value: "100%" },
];
