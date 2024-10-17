import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const careers = [
  { title: 'Desarrollador web frontend', icon: Globe },
  { title: 'Desarrollador web backend', icon: Server },
  { title: 'Desarrollador full-stack', icon: Code },
  { title: 'Administrador de bases de datos', icon: Database },
];

const SalidasProfesionales: React.FC = () => {
  return (
    <section id="salidas-profesionales" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-blue-800 dark:text-blue-300"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Salidas Profesionales
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          El Grado Superior en Desarrollo de Aplicaciones Web te abre las puertas a diversas oportunidades laborales en el sector tecnológico, incluyendo:
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <motion.div
                className="relative mb-4 inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 bg-blue-200 dark:bg-blue-700 rounded-full animate-ping opacity-75"></div>
                <career.icon className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto text-blue-700 dark:text-blue-400" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 dark:text-blue-300">
                {career.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalidasProfesionales;