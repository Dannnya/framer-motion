import { color, motion } from 'framer-motion';

export const AnimatedShapes = () => {

    const boxVariants = {
        initial: {
            scale: 1,
            rotation: 0,
            skew: 0,
        },
        hover: {
            scale: 1.2,
            rotate: 15,
            skew: '5deg',
            transition: { duration: 0.3 },
        },
        click: {
            scale: 0.9,
            rotating: -15,
            transition: { duration: 0.3 },
            backgroundColor: 'crimson',
        },
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <motion.div className='w-40 h-40 bg-blue-500 rounded-lg'
                variants={boxVariants}
                initial='initial'    
                whileHover='hover'
                whileTap='click'
            />
        </div>
    )
};
