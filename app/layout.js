import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Chatbot from './components/chatbot';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ameer Hamza - Senior Software Engineer | Full-Stack Developer',
  description: 'Senior Software Engineer with 5+ years of experience specializing in MERN stack, TypeScript, NestJS, and AI-driven applications. Proven track record of building scalable microservices, real-time dashboards, and full-stack solutions. Expert in React, Next.js, Node.js, Python, and modern web technologies.',
  keywords: 'Senior Software Engineer, Full-Stack Developer, MERN Stack, TypeScript, NestJS, React, Next.js, Node.js, Python, Microservices, AI-driven applications, Software Developer Portfolio',
  openGraph: {
    title: 'Ameer Hamza - Senior Software Engineer',
    description: '5+ years of experience building scalable full-stack applications with MERN stack, TypeScript, and NestJS',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
