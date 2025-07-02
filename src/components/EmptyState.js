'use client';

import { motion } from 'framer-motion';
import { FileQuestion } from 'lucide-react';

const EmptyState = ({
  title = "No Projects Yet",
  message = "We're currently working on something amazing. Stay tuned!",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl px-8 py-20 text-center"
    >
      {/* Icon with subtle bounce */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex items-center justify-center mb-6"
      >
        <FileQuestion size={56} className="text-muted-foreground drop-shadow-sm" />
      </motion.div>

      <h3 className="text-2xl font-bold text-foreground tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground text-base max-w-lg mx-auto">{message}</p>
    </motion.div>
  );
};

export default EmptyState;
