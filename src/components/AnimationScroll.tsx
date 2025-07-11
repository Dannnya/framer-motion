import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimationScroll = () => {

    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
    const borderRadius = useTransform(scrollY, [0, 1000], ['0%', '50%']);

    return (
        <div className='relative h-screen overflow-hidden'>
            <motion.img
                src='https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Background'
                className='absolute inset-0 w-full h-full object-cover'
                style={{ scale, borderRadius }}
            />

            <div className="sticky top-0 h-screen flex items-center justify-center">
                <h4 className='text-white text-4xl'>Scroll To Animate</h4>
            </div>
        </div>
    )
};
