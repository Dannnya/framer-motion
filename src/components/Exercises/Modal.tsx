import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col items-center'> 
            <button
                className='mb-4 p-2 bg-blue-700 text-white'
                onClick={() => setIsOpen(!isOpen)}
            >
                Open Modal
            </button>
            <AnimatePresence>
                {isOpen && (
                <motion.div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center
                    items-center'
                onClick={() => setIsOpen(false)}
                >
                    <motion.div className='bg-white p-4 rounded'
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: '-100%' }}
                        animate={{ y: '0vh' }}
                        exit={{ y: '100vh' }}
                        transition={{ duration: 0.5 }}
                    >
                        <h4 className='text-lg font-bold text-black'>Modal Title</h4>
                        <p className='text-black m-auto ml-10 mr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quasi, porro distinctio! Harum voluptatibus
                            beatae corrupti cumque expedita doloribus commodi
                            temporibus voluptate doloremque et, eaque, esse,
                            earum recusandae dolores molestiae laudantium!</p>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};
