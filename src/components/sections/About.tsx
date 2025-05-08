'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaBolt, FaHandshake, FaGlobe, FaBullseye, FaEye, FaArrowRight, FaChartLine, FaUsers, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      title: 'Inovação Constante',
      description: 'Buscamos sempre as soluções mais modernas e eficientes para nossos clientes.',
      icon: <FaLightbulb className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Excelência Técnica',
      description: 'Comprometimento com a qualidade e melhores práticas de desenvolvimento.',
      icon: <FaBolt className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Colaboração',
      description: 'Trabalho em equipe e parceria com nossos clientes para resultados excepcionais.',
      icon: <FaHandshake className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Impacto Social',
      description: 'Desenvolvemos soluções que fazem a diferença na vida das pessoas.',
      icon: <FaGlobe className="w-8 h-8 text-primary" />,
    },
  ];

  const stats = [
    { number: '50+', label: 'Projetos Entregues', icon: <FaCode className="w-6 h-6 text-primary" /> },
    { number: '30+', label: 'Clientes Satisfeitos', icon: <FaUsers className="w-6 h-6 text-primary" /> },
    { number: '5+', label: 'Anos de Experiência', icon: <FaChartLine className="w-6 h-6 text-primary" /> },
    { number: '100%', label: 'Comprometimento', icon: <FaRocket className="w-6 h-6 text-primary" /> },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Transformando o Futuro com <span className="text-primary">Tecnologia</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto mb-8">
            Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar
            soluções que transformam o futuro e impactam positivamente a sociedade.
          </p>
        </motion.div>

        {/* Imagem Principal e Missão/Visão */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/about/about_1.png"
              alt="Equipe VVAI trabalhando em projetos inovadores"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Missão */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <FaBullseye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-text/80 leading-relaxed text-lg">
                Transformar ideias em soluções tecnológicas inovadoras que impactam
                positivamente a vida das pessoas e impulsionam o crescimento das empresas.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300 rounded-b-2xl" />
            </motion.div>

            {/* Visão */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <FaEye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                  Nossa Visão
                </h3>
              </div>
              <p className="text-text/80 leading-relaxed text-lg">
                Ser referência em inovação e tecnologia, reconhecida pela excelência
                técnica e impacto social de nossas soluções, contribuindo para um
                futuro mais tecnológico e sustentável.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300 rounded-b-2xl" />
            </motion.div>

            {/* Estatísticas
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                        {stat.number}
                      </h4>
                      <p className="text-sm text-text/60 group-hover:text-text/80 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            Nossos <span className="text-primary">Valores</span>
          </h3>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Princípios que guiam nosso trabalho e relacionamento com clientes e parceiros,
            formando a base de nossa cultura e excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h4 className="text-2xl font-bold mb-4 text-text group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-text/80 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-xl text-text/80 max-w-2xl mx-auto mb-8">
            Vamos transformar suas ideias em realidade com tecnologia e inovação.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Fale conosco
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 