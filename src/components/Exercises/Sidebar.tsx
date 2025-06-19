import { motion } from 'framer-motion';
import { useState } from 'react';

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button className='mb-4 p-2 bg-blue-500 text-white rounded items-center justify-center'
                onClick={() => setIsOpen(!isOpen)}
            >
                Toggle Sidebar
            </button>

            <motion.div
                className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4
                    ${ isOpen ? '':'-translate-x-full'}
                    `}
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? '0%' : '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <h4 className='text-lg font-bold'>Sidebar</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dignissimos.</p>
            </motion.div>
        </div>
    )
};