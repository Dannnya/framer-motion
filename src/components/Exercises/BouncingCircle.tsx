import { motion } from 'framer-motion';

export const BouncingCirce = () => {
    return (
        <motion.div className='bg-red-300 rounded-full w-20 h-20 mt-[5rem]'
            animate={{ y: [0, -100, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
    )
};
