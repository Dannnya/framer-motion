import { motion } from 'framer-motion';

export const ResponsiveButton = () => {
    return (
        <motion.button className='p-2 bg-blue-500 text-white rounded 
            transition-transform duration-300 ease-in-out cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.3 }}
        >
            Click Me!
        </motion.button>
    )
};
