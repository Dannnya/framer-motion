import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const FadeComponent = () => {

    const [visible, setVisible] = useState(false);
    return (
        <div className='flex flex-col items-center justify-center'>
            <button className='mb-4 p-2 bg-blue-500 text-white rounded'
                onClick={() => setVisible(!visible)}
            >
                Fade
            </button>
        <AnimatePresence>
            {visible && (
                <motion.div className='p-4 bg-gray-300 rounded text-black'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hello, I'm fading component
                </motion.div>
                )}
        </AnimatePresence>
        </div>
    )
};
