import { motion } from 'framer-motion';
import '../css/StaggerAnimation.css';

const parentVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        },
    },

};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

export const StaggerAnimation = () => {
    return (
        <div>
            <motion.div variants={parentVariants} initial='hidden'
                animate='visible'
            >
                {[...Array(5)].map((_, index) => (
                    <motion.div className='box mt-[2rem] ' key={index} variants={childVariants}/>
                ))}
                </motion.div>
        </div>
    )
};
