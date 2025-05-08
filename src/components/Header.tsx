'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScroll } from '@/utils/smoothScroll';
import { FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Atualiza a seção ativa baseado no scroll
      const sections = ['home', 'about', 'projects', 'tech', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Início', href: 'home' },
    { label: 'Sobre', href: 'about' },
    { label: 'Projetos', href: 'projects' },
    { label: 'Tecnologias', href: 'tech' },
    { label: 'Equipe', href: 'team' },
    { label: 'Contato', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    smoothScroll(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-primary/10' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between" role="navigation" aria-label="Menu principal">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group" 
              aria-label="Página inicial"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Image
                  src="/logos/logo_fundo_escuro_1.png"
                  alt="VVAI Logo"
                  width={75}
                  height={75}
                  className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12"
                  priority
                />
              </motion.div>
              
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-2 py-1 text-text hover:text-primary transition-colors focus:outline-none ${
                    activeSection === item.href ? 'text-primary' : ''
                  }`}
                  aria-label={`Ir para seção ${item.label}`}
                  aria-current={activeSection === item.href ? 'page' : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Menu Mobile */}
            <motion.button
              className="md:hidden p-2 text-text hover:text-primary focus:outline-none rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </nav>

          {/* Menu Mobile Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md shadow-lg border-t border-primary/10"
                id="mobile-menu"
                role="menu"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left py-2 px-4 rounded-md transition-colors ${
                          activeSection === item.href 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-text hover:bg-primary/5 hover:text-primary'
                        }`}
                        role="menuitem"
                        whileHover={{ x: 4 }}
                        whileTap={{ x: 0 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-50"
            aria-label="Voltar ao topo"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            <FaArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 