import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import ServicesHub from './components/ServicesHub.tsx';
import ProjectsPortfolio from './components/ProjectsPortfolio.tsx';
import ServiceAreas from './components/ServiceAreas.tsx';
import Reviews from './components/Reviews.tsx';
import FAQ from './components/FAQ.tsx';
import About from './components/About.tsx';
import ContactPortal from './components/ContactPortal.tsx';
import QuoteForm from './components/QuoteForm.tsx';
import MobileStickyBar from './components/MobileStickyBar.tsx';
import SEOManager from './components/SEOManager.tsx';
import { BUSINESS_INFO } from './data.ts';
import { Phone, CheckCircle, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'day');

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'day') {
      root.classList.add('theme-day');
      root.classList.remove('theme-night');
      body.classList.add('theme-day');
      body.classList.remove('theme-night');
    } else {
      root.classList.add('theme-night');
      root.classList.remove('theme-day');
      body.classList.add('theme-night');
      body.classList.remove('theme-day');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'night' ? 'day' : 'night';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const displayTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-0"
          >
            <Hero onOpenQuote={() => setIsQuoteOpen(true)} setActiveTab={setActiveTab} />
            <ServicesHub onOpenQuote={() => setIsQuoteOpen(true)} />
            <ProjectsPortfolio onOpenQuote={() => setIsQuoteOpen(true)} />
            <ServiceAreas onOpenQuote={() => setIsQuoteOpen(true)} />
            <Reviews />
            <FAQ onOpenQuote={() => setIsQuoteOpen(true)} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
          >
            <ServicesHub onOpenQuote={() => setIsQuoteOpen(true)} />
          </motion.div>
        );
      case 'areas':
        return (
          <motion.div
            key="areas-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceAreas onOpenQuote={() => setIsQuoteOpen(true)} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
          >
            <About onOpenQuote={() => setIsQuoteOpen(true)} />
            <Reviews />
          </motion.div>
        );
      case 'faqs':
        return (
          <motion.div
            key="faqs-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
          >
            <FAQ onOpenQuote={() => setIsQuoteOpen(true)} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
          >
            <ContactPortal onOpenQuote={() => setIsQuoteOpen(true)} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'day' ? 'theme-day bg-[#f4f6fa] text-slate-900' : 'theme-night bg-[#091522] text-white'} flex flex-col justify-between selection:bg-[#E8581C] selection:text-white transition-colors duration-300`}>
      
      {/* Dynamic SEO JSON-LD Schema Engine */}
      <SEOManager activeTab={activeTab} />

      {/* Inline Top Sticky Emergency Alert Rail */}
      <div id="top-announcement-banner" className="bg-red-750 text-white text-[11px] py-2 px-4 font-bold text-center flex items-center justify-center gap-2 select-none border-b border-red-800">
        <ShieldAlert className="w-3.5 h-3.5 text-red-200 shrink-0 animate-pulse" />
        <span>Plumbing Emergency? We offer local 24/7 dispatcher scheduling:</span>
        <a href={BUSINESS_INFO.phoneFormatted} className="underline hover:text-red-100 flex items-center gap-1 font-extrabold text-[#fff]">
          <Phone className="w-3 h-3 animate-wiggle" />
          <span>Call {BUSINESS_INFO.phone}</span>
        </a>
      </div>

      {/* Main header block navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => setIsQuoteOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Primary content router workspace */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {displayTabContent()}
        </AnimatePresence>
      </main>

      {/* Site footer legal, NAP, licensing */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuote={() => setIsQuoteOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Mobile-only Persistent Navigation/Cal-CTA sticky element */}
      <MobileStickyBar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Dialog overlay quote request forms handler */}
      <AnimatePresence>
        {isQuoteOpen && (
          <QuoteForm
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
