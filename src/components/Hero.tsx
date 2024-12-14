import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto px-4"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Odyssey Exchange
      </motion.h1>
      
      <motion.p 
        className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The World's First Dedicated Memecoin Exchange Platform
      </motion.p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="https://ody.lol"
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Exchange <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>

        <motion.a
          href="https://t.me/t_dmi3"
          className="inline-flex items-center px-8 py-3 rounded-full border-2 border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          For Partnership
        </motion.a>
      </div>
    </motion.div>
  );
}