'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const animationProps = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -50 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const imageAnimationProps = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 50 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...animationProps}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text">
              Transformando Ideias em{' '}
              <span className="text-primary">Realidade Digital</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-text/80">
              Somos a VVAI, uma equipe apaixonada por inovação e tecnologia.
              Desenvolvemos soluções que transformam o futuro.
            </p>
          </motion.div>

          <motion.div
            {...imageAnimationProps}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/hero/hero_2.png"
                alt="VVAI Hero"
                fill
                className="object-contain"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 