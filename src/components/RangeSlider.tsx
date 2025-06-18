import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ChangeEvent } from 'react';

export const RangeSlider = () => {

    const scale = useSpring(1);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value));
    };

    return (
        <div className='flex items-center justify-center mt-[3rem]'>
            <motion.button className='box' style={{ scale }}>
                <div className='mt-[6rem]'>
                    <input type='range' min={0.5} max={5} step={0.01} defaultValue={1}
                        onChange={ changeHandler }
                    />
                </div>
            </motion.button>
        </div>
    )
};
