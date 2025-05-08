'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Image
                  src="/logos/logo_fundo_branco.png"
                  alt="VVAI Logo"
                  width={150}
                  height={150}
                  className="w-24 h-24 object-contain"
                />
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
            <p className="text-lg text-text/80 mb-6 max-w-md">
              Transformando ideias em soluções tecnológicas inovadoras que impulsionam o sucesso dos nossos clientes.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <FaLinkedin className="text-xl" />
                </div>
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <FaGithub className="text-xl" />
                </div>
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                  <FaTwitter className="text-xl" />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-text">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="#about"
                  className="text-text/80 hover:text-primary transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Sobre
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#projects"
                  className="text-text/80 hover:text-primary transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Projetos
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#team"
                  className="text-text/80 hover:text-primary transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Equipe
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="text-text/80 hover:text-primary transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contato
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-text">Contato</h3>
            <ul className="space-y-4 text-text/80">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:contato@vvai.com.br" className="hover:text-primary transition-colors">
                  contato@vvai.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-primary/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text/60">
              © {currentYear} VVAI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-text/60 hover:text-primary transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-text/60 hover:text-primary transition-colors text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 