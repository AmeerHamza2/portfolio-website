// Knowledge base for AI chatbot - contains all portfolio information
export const knowledgeBase = {
  personal: {
    name: "Ameer Hamza",
    designation: "Senior Software Engineer",
    location: "Lahore, Pakistan",
    email: "ameerhamza1710@gmail.com",
    phone: "+92 302 4433927",
    description: "Senior Software Engineer with 5+ years of experience in full-stack development, specializing in the MERN stack, TypeScript, and NestJS. Proven track record of designing and developing scalable backend services using NestJS and Express, and building responsive frontends using React and Next.js. Comfortable working across the stack, integrating RESTful APIs, managing databases, and implementing modern architectures including microservices. Quick learner with growing exposure to Python for backend automation and AI-driven applications. Passionate about solving real-world problems through clean code, performance optimization, and modern web technologies.",
    github: "https://github.com/AmeerHamza2",
    linkedin: "https://www.linkedin.com/in/ameer-hamza-715ba223b/"
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Contractor (Remote)",
      location: "California, United States",
      duration: "03/2022 - Present",
      description: "Contributed to the development of AI-driven platforms, leveraging NestJS for robust back-end services, Python for predictive analytics, and React.js for building interactive, data-driven front-end interfaces. Built dynamic, real-time dashboards using React.js and visualization libraries like Chart.js to display AI-generated insights. Integrated Python-based AI prediction services into microservices architecture to provide real-time insights. Worked on microservices using NestJS to manage user data, real-time updates, and integrated Python AI modules. Developed custom APIs with NestJS to optimize performance for AI-based predictions. Used Storybook to create reusable UI components for dashboards and data visualization."
    },
    {
      title: "Software Engineer",
      company: "Devsinc",
      location: "Lahore, Pakistan",
      duration: "02/2021 - 02/2022",
      description: "Developed AI-driven platforms using NestJS for back-end services, Python for predictive analytics, and React.js for front-end interfaces. Increased predictive insight accuracy by 20% by building microservices with NestJS and integrating Python AI modules. Enhanced scalability by implementing microservices, streamlining communication between Python AI services and the React.js front-end. Created APIs with NestJS to optimize AI predictions and improve front-end performance. Designed interactive dashboards using React.js and Chart.js, incorporating custom graphs for data visualization."
    },
    {
      title: "Associate Software Engineer",
      company: "Devsinc",
      location: "Lahore, Pakistan",
      duration: "02/2020 - 02/2021",
      description: "Developed and optimized front-end components using React.js and Next.js, creating intuitive user interfaces that improved overall user engagement and satisfaction. Collaborated with cross-functional teams to ensure seamless integration of Nest.js and Node.js services, resulting in enhanced application performance and reliability. Contributed to Agile processes, actively participating in sprint planning, daily stand-ups, and code reviews. Enhanced code quality through unit tests and troubleshooting. Actively engaged in knowledge sharing sessions and workshops, helping to elevate team skills and promote best practices in front-end development and design methodologies."
    }
  ],

  education: {
    degree: "Bachelors in Computer Science",
    institution: "COMSATS Institute of Information Technology",
    duration: "2016 - 2020"
  },

  skills: [
    "JavaScript", "TypeScript", "Python", "Node.js", "NestJS", "Express.js",
    "MongoDB", "Mongoose", "GraphQL", "REST", "TypeORM", "PostgreSQL", "Redis",
    "Socket.io", "React.js", "Next.js", "Storybook", "React-Testing-Library",
    "Tailwind CSS", "Material-UI", "Redux-toolkit", "RTK", "HTML", "CSS",
    "Cypress", "Jest", "Git", "GitHub", "Jira", "GitLab", "Docker", "AWS EC2",
    "AWS S3", "Heroku", "GCP", "PubSub", "Vercel", "Chart.js"
  ],

  projects: [
    {
      name: "Predict View",
      description: "Built NestJS microservices for AI-driven mental wellness platform, integrating Python AI models for insights. Managed back-end with NestJS and PostgreSQL. Developed front-end in React.js to enhance user interaction and provide a seamless experience for mental wellness tracking and insights.",
      technologies: ["NestJS", "Python", "React.js", "PostgreSQL", "Microservices"],
      role: "Full-Stack Developer"
    },
    {
      name: "Trio",
      description: "Developed web3 platform with Next.js and Redux for front-end, and Node.js with blockchain integration for backend. Ensured security and performance in collaboration with teams. Built a comprehensive platform that leverages blockchain technology for secure transactions and data management.",
      technologies: ["Next.js", "Redux", "Node.js", "Blockchain", "Web3"],
      role: "Full-Stack Developer"
    },
    {
      name: "Shop monkey",
      description: "Developed Shop monkey, a SaaS for auto repair shops. Built responsive UI with React and Tailwind CSS for seamless use across devices. Enhanced performance and integrated APIs to deliver high-quality functionality for managing auto repair shop operations.",
      technologies: ["React", "Tailwind CSS", "SaaS", "REST APIs"],
      role: "Full-Stack Developer"
    },
    {
      name: "Kangaroo Health",
      description: "Worked on the front-end using React.js, collaborating closely with designers for UI/UX improvements. Contributed to the integration of Python-based services with the platform's back-end, ensuring secure data management for patient care solutions. Platform: https://kangaroohealth.com/",
      technologies: ["React.js", "Python", "UI/UX"],
      role: "Front-End Developer"
    },
    {
      name: "Easy Button Skip Tracing",
      description: "Enhanced the Easy Button Skip Tracing platform, providing fast skip tracing for real estate professionals. Built an intuitive interface and efficient workflows for reliable contact and property insights. Platform: https://easybuttonskiptrace.com/",
      technologies: ["React.js", "Next.js", "Real Estate Tech"],
      role: "Front-End Developer"
    }
  ],

  expertise: {
    languages: ["JavaScript", "TypeScript", "Python"],
    backend: ["Node.js", "NestJS", "Express.js", "MongoDB/Mongoose", "GraphQL/REST", "TypeORM/PostgreSQL", "Redis", "Socket.io"],
    frontend: ["React.js", "Next.js", "Storybook", "React-Testing-Library", "Tailwind CSS", "Material-UI", "Redux-toolkit/RTK", "HTML/CSS", "Cypress", "Jest"],
    tools: ["Git", "GitHub", "Jira", "GitLab", "Docker", "AWS EC2/S3", "Heroku", "GCP", "PubSub", "Vercel"],
    totalExperience: "5+ years"
  }
};

// Function to convert knowledge base to context string for AI
export function getContextString() {
  const kb = knowledgeBase;

  return `
# About Ameer Hamza

${kb.personal.description}

## Contact Information
- Name: ${kb.personal.name}
- Role: ${kb.personal.designation}
- Location: ${kb.personal.location}
- Email: ${kb.personal.email}
- Phone: ${kb.personal.phone}
- GitHub: ${kb.personal.github}
- LinkedIn: ${kb.personal.linkedin}

## Professional Experience
${kb.experience.map(exp =>
  `- ${exp.title} at ${exp.company}${exp.location ? ` (${exp.location})` : ''} (${exp.duration})
  ${exp.description}`
).join('\n\n')}

Total Experience: ${kb.expertise.totalExperience}

## Education
${kb.education.degree} from ${kb.education.institution} (${kb.education.duration})

## Technical Skills
${kb.skills.join(', ')}

## Areas of Expertise
- Languages: ${kb.expertise.languages.join(', ')}
- Backend Technologies: ${kb.expertise.backend.join(', ')}
- Frontend Technologies: ${kb.expertise.frontend.join(', ')}
- Tools & Technologies: ${kb.expertise.tools.join(', ')}

## Notable Projects

${kb.projects.map((project, index) =>
  `${index + 1}. ${project.name}
   ${project.description}
   Technologies: ${project.technologies.join(', ')}
   Role: ${project.role}`
).join('\n\n')}
`;
}
