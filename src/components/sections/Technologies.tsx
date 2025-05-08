'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTensorflow, 
  SiMongodb, 
  SiPostgresql,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiReact
} from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      icon: <FaReact className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Frontend',
      description: 'Biblioteca JavaScript para construção de interfaces',
    },
    {
      name: 'React Native',
      icon: <SiReact className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Mobile',
      description: 'Framework para desenvolvimento mobile multiplataforma',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Frontend',
      description: 'Superset JavaScript com tipagem estática',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Frontend',
      description: 'Framework React para aplicações web modernas',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Frontend',
      description: 'Framework CSS utilitário para design rápido',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Backend',
      description: 'Runtime JavaScript para backend',
    },
    {
      name: 'Python',
      icon: <FaPython className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Backend',
      description: 'Linguagem versátil para desenvolvimento',
    },
    {
      name: 'Flask',
      icon: <SiFlask className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Backend',
      description: 'Framework web Python minimalista',
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Backend',
      description: 'Framework Python moderno e rápido',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Database',
      description: 'Banco de dados NoSQL flexível',
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'Database',
      description: 'Banco de dados relacional robusto',
    },
    {
      name: 'Docker',
      icon: <FaDocker className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'DevOps',
      description: 'Plataforma de containerização',
    },
    {
      name: 'TensorFlow',
      icon: <SiTensorflow className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'AI/ML',
      description: 'Framework para machine learning',
    },
    {
      name: 'PyTorch',
      icon: <SiPytorch className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'AI/ML',
      description: 'Biblioteca para deep learning',
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="w-16 h-16 text-text/60 group-hover:text-primary transition-colors duration-300" />,
      category: 'DevOps',
      description: 'Sistema de controle de versão',
    },
  ];

  const categories = ['Frontend', 'Mobile', 'Backend', 'Database', 'DevOps', 'AI/ML'];

  // Criar três cópias do array para garantir transição suave
  const techArray = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tech" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Nossas <span className="text-primary">Tecnologias</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias para desenvolver soluções
            inovadoras e escaláveis que impulsionam o sucesso dos nossos clientes.
          </p>
        </motion.div>

        {/* Categorias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/80 backdrop-blur-sm text-primary rounded-full text-sm font-medium cursor-pointer hover:bg-white transition-colors shadow-lg hover:shadow-xl border border-primary/10 hover:border-primary/20"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Carrossel de Tecnologias */}
        <div className="relative">
          <div className="flex space-x-8 overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex space-x-8"
            >
              {techArray.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 } 
                  }}
                  className="group flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg min-w-[280px] hover:bg-white transition-all duration-300 border border-primary/10 hover:border-primary/20"
                >
                  <div className="relative">
                    {tech.icon}
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mt-6 text-text group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <span className="text-sm font-medium text-text/60 group-hover:text-primary transition-colors duration-300 mt-2">
                    {tech.category}
                  </span>
                  <p className="text-sm text-text/80 mt-4 text-center line-clamp-2">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradientes nas bordas do carrossel */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        
      </div>
    </section>
  );
};

export default Technologies; 