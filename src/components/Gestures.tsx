import { motion } from 'framer-motion';
import '../App.css';

export const Gestures = () => {
    return (
        <div>
            {/* whileHover */}
            <motion.div className='box'
                whileHover={{ scale: 1.2, rotate: 90 }}
            />

            {/* whileTap */}
            <br/>
            <motion.div
            className='box'
            whileTap={{ scale: 0.8, backgroundColor: 'crimson'}}
            />

            <br/>
            <motion.div
            className='box flex'
            drag
            dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
            }}
            />
        </div>
    )
};
