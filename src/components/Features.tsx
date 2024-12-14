import { motion } from 'framer-motion';
import { Percent, RefreshCcw, Users } from 'lucide-react';

const features = [
  {
    icon: Percent,
    title: '0% Spot Trading Fee',
    description: 'Trade your favorite memecoins with zero commission on all spot trades.'
  },
  {
    icon: RefreshCcw,
    title: '10% Liquidation Rebate',
    description: 'Get 10% back on any liquidations, providing a safety net for traders.'
  },
  {
    icon: Users,
    title: 'Partnership Program',
    description: 'Join our partnership program with industry-leading conditions and benefits.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}