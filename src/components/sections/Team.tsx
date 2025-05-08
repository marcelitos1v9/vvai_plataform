'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter, FaBehance, FaDribbble, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'João Silva',
      role: 'Desenvolvedor Full Stack',
      image: '/team/member1.svg',
      description: 'Especialista em desenvolvimento web com foco em soluções escaláveis e inovadoras.',
      social: {
        linkedin: { url: '#', icon: <FaLinkedin /> },
        github: { url: '#', icon: <FaGithub /> },
        twitter: { url: '#', icon: <FaTwitter /> },
        email: { url: 'mailto:joao@vvai.com.br', icon: <FaEnvelope /> },
      },
    },
    {
      name: 'Maria Santos',
      role: 'UX/UI Designer',
      image: '/team/member2.svg',
      description: 'Criativa e apaixonada por design, transformando ideias em experiências únicas.',
      social: {
        linkedin: { url: '#', icon: <FaLinkedin /> },
        behance: { url: '#', icon: <FaBehance /> },
        dribbble: { url: '#', icon: <FaDribbble /> },
        email: { url: 'mailto:maria@vvai.com.br', icon: <FaEnvelope /> },
      },
    },
    {
      name: 'Pedro Oliveira',
      role: 'Desenvolvedor Backend',
      image: '/team/member3.svg',
      description: 'Especialista em arquitetura de sistemas e desenvolvimento de APIs robustas.',
      social: {
        linkedin: { url: '#', icon: <FaLinkedin /> },
        github: { url: '#', icon: <FaGithub /> },
        twitter: { url: '#', icon: <FaTwitter /> },
        email: { url: 'mailto:pedro@vvai.com.br', icon: <FaEnvelope /> },
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
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
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que fazem parte da nossa equipe e
            estão prontos para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-text group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-text/80 mb-6 line-clamp-2">{member.description}</p>
                
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, { url, icon }]) => (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text/60 hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        {icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text">
            Quer fazer parte da nossa equipe?
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Venha trabalhar conosco
            <FaEnvelope className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 