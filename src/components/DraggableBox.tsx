import { motion, useMotionValue, useTransform } from 'framer-motion';

export const DraggableBox = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);


    const backgroundColor = useTransform(x, [-100, 100], ['#ff0000', '#00ff00']);
    return (
        <motion.div drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            className='w-32 h-32 flex items-center justify-center rounded-lg
            shadow-lg cursor-pointer bg-yellow-300'
            style={{ x, y, backgroundColor }}    
        >
            <span className='text-white'>Drag me !</span>
        </motion.div>
    )
};
