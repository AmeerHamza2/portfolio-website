import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import pic from '/public/profile.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Predict View',
        description: "Built NestJS microservices for AI-driven mental wellness platform, integrating Python AI models for insights. Managed back-end with NestJS and PostgreSQL. Developed front-end in React.js to enhance user interaction and provide a seamless experience for mental wellness tracking and insights.",
        tools: ['NestJS', 'Python', 'React.js', 'PostgreSQL', 'Microservices'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Trio',
        description: 'Developed web3 platform with Next.js and Redux for front-end, and Node.js with blockchain integration for backend. Ensured security and performance in collaboration with teams. Built a comprehensive platform that leverages blockchain technology for secure transactions and data management.',
        tools: ['Next.js', 'Redux', 'Node.js', 'Blockchain', 'Web3'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Shop monkey',
        description: 'Developed Shop monkey, a SaaS for auto repair shops. Built responsive UI with React and Tailwind CSS for seamless use across devices. Enhanced performance and integrated APIs to deliver high-quality functionality for managing auto repair shop operations.',
        tools: ['React', 'Tailwind CSS', 'SaaS', 'REST APIs'],
        code: '',
        role: 'Full-Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Kangaroo Health',
        description: "Worked on the front-end using React.js, collaborating closely with designers for UI/UX improvements. Contributed to the integration of Python-based services with the platform's back-end, ensuring secure data management for patient care solutions.",
        tools: ['React.js', 'Python', 'UI/UX'],
        code: '',
        demo: 'https://kangaroohealth.com/',
        image: ayla,
        role: 'Front-End Developer',
    },
    {
        id: 5,
        name: 'Easy Button Skip Tracing',
        description: "Enhanced the Easy Button Skip Tracing platform, providing fast skip tracing for real estate professionals. Built an intuitive interface and efficient workflows for reliable contact and property insights.",
        tools: ['React.js', 'Next.js', 'Real Estate Tech'],
        code: '',
        demo: 'https://easybuttonskiptrace.com/',
        image: crefin,
        role: 'Front-End Developer',
    },
    {
        id: 6,
        name: 'Nuriy Jewelry Marketplace',
        description: "Developed a premium jewelry e-commerce marketplace connecting artisan vendors with customers. Built with Next.js for optimal performance, featuring product categorization (rings, necklaces, earrings, bracelets), vendor management system, user authentication, shopping cart, and seasonal collections. Implemented image optimization and responsive design for seamless shopping experience.",
        tools: ['Next.js', 'React', 'E-commerce', 'Image Optimization', 'Vendor System'],
        code: '',
        demo: 'https://nuriy-jewelry-frontend.vercel.app/',
        image: travel,
        role: 'Full-Stack Developer',
    },
    {
        id: 7,
        name: 'Nortinia Chat & Call Center Platform',
        description: "Developed a multi-tenant SaaS platform for managing chat and call center operations. Built with NestJS backend and Next.js frontend, featuring embeddable chat widgets for websites, AI-powered chatbot for automated responses, escalation system for human agent support, real-time chat assignment and management for representatives using Socket.io, voice bot integration for voice interactions, and comprehensive tenant management. Implemented scalable multi-tenant architecture with PostgreSQL database.",
        tools: ['NestJS', 'Next.js', 'PostgreSQL', 'Socket.io', 'Multi-tenant SaaS', 'AI Chatbot', 'Voice Bot', 'Real-time Chat'],
        code: '',
        demo: 'https://nortinia.com/hu',
        image: realEstate,
        role: 'Full-Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },