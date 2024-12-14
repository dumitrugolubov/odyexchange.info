import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="py-20">
        <Hero />
      </header>

      <main>
        <Features />
        
        <motion.section 
          className="py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose Odyssey Exchange?
            </h2>
            <p className="text-lg text-blue-600 dark:text-white mb-4">
              Odyssey Exchange is revolutionizing the crypto trading landscape as the first-ever dedicated memecoin exchange platform. Our innovative approach combines security, efficiency, and user-friendly features to provide the best trading experience for memecoin enthusiasts.
            </p>
            <p className="text-lg text-blue-600 dark:text-white">
              With zero commission on spot trading, generous liquidation rebates, and exceptional partnership opportunities, Odyssey Exchange is setting new standards in the cryptocurrency exchange market. Join the future of memecoin trading today.
            </p>
          </div>
        </motion.section>
      </main>

      <footer className="py-8 text-center text-blue-600 dark:text-white">
        <p>© 2024 Odyssey Exchange. The First Memecoin Exchange Platform.</p>
      </footer>
    </div>
  );
}

export default App;