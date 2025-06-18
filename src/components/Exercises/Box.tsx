import { motion } from 'framer-motion';

export const Box = () => {
    return (
        <motion.div className= 'box bg-blue-300 w-20 h-20 mt-[5rem]'
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 3 }}
        />
    )
};
