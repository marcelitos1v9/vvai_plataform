'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Calm Wave',
      description: 'Sistema inteligente de eliminação de ruídos para pessoas com TPAc, proporcionando conforto e qualidade de vida.',
      image: '/Projects/logo_calm_wave.png',
      tags: ['React', 'Node.js', 'Python', 'IA'],
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
              <div className="relative h-64 bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text">{project.title}</h3>
                <p className="text-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects; 