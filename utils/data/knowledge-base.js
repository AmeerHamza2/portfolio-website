// Knowledge base for AI chatbot - contains all portfolio information
export const knowledgeBase = {
  personal: {
    name: "Ameer Hamza",
    designation: "AI & No-Code Apps Developer",
    location: "Lahore, Pakistan",
    email: "ameerhamza1710@gmail.com",
    phone: "+92 302 4433927",
    description: "Senior Software Engineer with 5+ years of experience in full-stack development, specializing in the MERN stack, TypeScript, and NestJS. Expert in AI-driven platforms and no-code development using Bubble, FlutterFlow, Adalo, WeWeb, Lovable, Xano, and Zapier. Proven track record of building scalable applications with AI integrations, workflow automation, and modern web technologies. Passionate about transforming ideas into production-ready apps using cutting-edge no-code platforms and AI-powered solutions.",
    github: "https://github.com/AmeerHamza2",
    linkedin: "https://www.linkedin.com/in/ameer-hamza-715ba223b/"
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Devsinc",
      duration: "Mar 2022 - Present",
      description: "Leading full-stack development projects with focus on AI integrations and no-code solutions"
    },
    {
      title: "Software Engineer",
      company: "Devsinc",
      duration: "Feb 2021 - Feb 2022",
      description: "Developed scalable web applications using MERN stack and modern technologies"
    },
    {
      title: "Associate Software Engineer",
      company: "Devsinc",
      duration: "Feb 2020 - Feb 2021",
      description: "Started career building full-stack applications and learning enterprise development practices"
    }
  ],

  education: {
    degree: "Bachelors in Computer Science",
    institution: "COMSATS Institute of Information Technology",
    duration: "2016 - 2020"
  },

  skills: [
    "HTML", "CSS", "Javascript", "Typescript", "React", "Next JS", "Node JS",
    "Express JS", "NestJS", "Python", "Tailwind", "MongoDB", "MySQL",
    "PostgreSQL", "Git", "Bootstrap", "Docker", "Figma", "AWS", "Firebase",
    "Bubble", "FlutterFlow", "Adalo", "WeWeb", "Lovable", "Xano", "Zapier",
    "OpenAI API", "Claude API", "LangChain", "Pinecone", "Supabase",
    "Airtable", "Make (Integromat)", "n8n", "Glide"
  ],

  projects: [
    {
      name: "AI-Powered E-commerce Platform",
      description: "Built a complete e-commerce platform using Bubble with AI-powered product recommendations and automated customer support. Integrated OpenAI API for intelligent chatbot responses, Xano for scalable backend database management, and Zapier for automated order processing workflows. Features include dynamic pricing, inventory management, payment processing via Stripe, and real-time analytics dashboard. The platform processes 1000+ orders daily with 95% customer satisfaction.",
      technologies: ["Bubble", "OpenAI API", "Xano", "Zapier", "Stripe", "Airtable"],
      role: "No-Code Developer"
    },
    {
      name: "FlutterFlow Mobile App with AI Integration",
      description: "Developed a cross-platform mobile application using FlutterFlow for a fitness startup. Integrated Claude API for personalized workout recommendations and meal planning. Used Firebase for real-time data synchronization and Supabase for user authentication. Implemented automated workout tracking with Zapier workflows and push notifications. The app achieved 4.8-star rating with 10K+ downloads in first month.",
      technologies: ["FlutterFlow", "Claude API", "Firebase", "Supabase", "Zapier", "Pinecone"],
      role: "Mobile App Developer"
    },
    {
      name: "WeWeb SaaS Dashboard with AI Analytics",
      description: "Created a comprehensive SaaS dashboard using WeWeb for a marketing agency. Integrated multiple AI APIs including OpenAI for content generation and LangChain for document processing. Built automated reporting system using Make (Integromat) and connected to various data sources via Xano. Features include real-time client analytics, automated invoice generation, and AI-powered insights that increased client retention by 40%.",
      technologies: ["WeWeb", "LangChain", "Make (Integromat)", "Xano", "OpenAI API", "Airtable"],
      role: "No-Code Developer"
    },
    {
      name: "Adalo Marketplace with Automation",
      description: "Developed a peer-to-peer marketplace mobile app using Adalo with advanced automation features. Implemented AI-powered product categorization using OpenAI API, automated vendor onboarding with Zapier workflows, and real-time chat functionality. Integrated payment processing, order tracking, and automated email marketing campaigns. The platform facilitated $50K+ in transactions within 3 months of launch.",
      technologies: ["Adalo", "OpenAI API", "Zapier", "Stripe", "n8n", "Firebase"],
      role: "Mobile App Developer"
    }
  ],

  expertise: {
    noCode: ["Bubble", "FlutterFlow", "Adalo", "WeWeb", "Lovable", "Glide"],
    fullStack: ["MERN Stack", "TypeScript", "NestJS", "Next.js"],
    ai: ["OpenAI API", "Claude API", "LangChain", "Pinecone"],
    automation: ["Zapier", "Make (Integromat)", "n8n"],
    backend: ["Xano", "Supabase", "Firebase", "MongoDB", "PostgreSQL"],
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
  `- ${exp.title} at ${exp.company} (${exp.duration})`
).join('\n')}

Total Experience: ${kb.expertise.totalExperience}

## Education
${kb.education.degree} from ${kb.education.institution} (${kb.education.duration})

## Technical Skills
${kb.skills.join(', ')}

## Areas of Expertise
- No-Code Platforms: ${kb.expertise.noCode.join(', ')}
- Full-Stack Development: ${kb.expertise.fullStack.join(', ')}
- AI Integration: ${kb.expertise.ai.join(', ')}
- Automation Tools: ${kb.expertise.automation.join(', ')}
- Backend Technologies: ${kb.expertise.backend.join(', ')}

## Notable Projects

${kb.projects.map((project, index) =>
  `${index + 1}. ${project.name}
   ${project.description}
   Technologies: ${project.technologies.join(', ')}
   Role: ${project.role}`
).join('\n\n')}
`;
}
