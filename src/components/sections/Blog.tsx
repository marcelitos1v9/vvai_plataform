'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      title: 'O Futuro da Inteligência Artificial',
      description: 'Descubra como a IA está transformando o mundo dos negócios e o que esperar para os próximos anos.',
      image: '/blog/post1.svg',
      date: '2024-03-15',
      author: 'João Silva',
      category: 'Tecnologia',
    },
    {
      title: 'Desenvolvimento Web Moderno',
      description: 'As melhores práticas e tecnologias para criar aplicações web escaláveis e performáticas.',
      image: '/blog/post2.svg',
      date: '2024-03-10',
      author: 'Maria Santos',
      category: 'Desenvolvimento',
    },
    {
      title: 'UX/UI Design em 2024',
      description: 'Tendências e inovações em design de interface que estão moldando a experiência do usuário.',
      image: '/blog/post3.svg',
      date: '2024-03-05',
      author: 'Pedro Oliveira',
      category: 'Design',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
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
            Nosso <span className="text-primary">Blog</span>
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades, tendências e insights sobre
            tecnologia, desenvolvimento e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/20"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-text/60 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-text group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-text/80 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                    <FaTag className="mr-2" />
                    {post.category}
                  </span>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Ler mais →
                  </motion.a>
                </div>
              </div>
            </motion.article>
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
            Quer receber mais conteúdo?
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Inscreva-se na newsletter
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 