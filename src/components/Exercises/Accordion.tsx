import { motion } from 'framer-motion';
import { useState } from 'react';

const items = [
    { title: 'Title 1', content: 'This is content of item 1' },
    { title: 'Title 2', content: 'This is content of item 2' },
    { title: 'Title 3', content: 'This is content of item 3' },
    { title: 'Title 4', content: 'This is content of item 4' },
];

export const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(null);
    
    const toggleItem = (index: any) => {
        setOpenIndex( openIndex === index ? null: index )
    }
    
    return (
        <div className='space-y-2 mt-10'>
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggleItem(index)}
                        className='w-full text-center p-2 bg-gray-300 rounded 
                    focus: outline-none'>
                        {item.title}
                    </button>

                    <motion.div
                        className='overflow-hidden'
                        initial={{ height: 0 }}
                        animate={{ height: openIndex === index ? 'auto' : 0 }}
                        transition={{ duration:0.3 }}
                    >
                        <h4 className='p-2 bg-gray-300 rounded text-black'>{item.content}</h4>
                    </motion.div>
                </div>
            ))}
        </div>
    )
};
