'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestão Inteligente',
      description: 'Plataforma completa para gestão empresarial com IA integrada.',
      image: '/projects/project1.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'IA'],
      link: '#',
    },
    // {
    //   title: 'E-commerce Personalizado',
    //   description: 'Loja virtual com experiência de compra personalizada.',
    //   image: '/projects/project2.svg',
    //   tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    //   link: '#',
    // },
    // {
    //   title: 'App de Saúde Digital',
    //   description: 'Aplicativo para monitoramento de saúde e bem-estar.',
    //   image: '/projects/project3.svg',
    //   tags: ['React Native', 'Python', 'PostgreSQL', 'ML'],
    //   link: '#',
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e inovadores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text">{project.title}</h3>
                <p className="text-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Ver projeto
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects; 