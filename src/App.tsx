import { motion } from 'framer-motion';
import { BouncingLoader } from './components/BouncingLoader';
import { Gestures } from './components/Gestures';
import './App.css';
import { ImageGallery } from './components/ImageGallery';
import { AnimatedShapes } from './components/AnimatedShapes';
import { StaggerAnimation } from './components/StaggerAnimation';
import { AnimatedGallery } from './components/AnimatedGallery';
import { RangeSlider } from './components/RangeSlider';
import { DraggableBox } from './components/DraggableBox';
import { AnimatedCard } from './components/AnimatedCard';
import { ScrollAnimation } from './components/ScrollAnimation';


function App() {
  return (
    <div>
      <h3 className="text-3xl font-bold underline ">Hello World!</h3>
      <motion.div className="box" animate={{ scale: [1, 2, 3, 2, 1] }} transition={{ duration: 5 }} />

      <BouncingLoader />

      <Gestures />
      
      <ImageGallery />

      <AnimatedShapes />

      <StaggerAnimation />

      <AnimatedGallery />

      <RangeSlider />

      <DraggableBox />

      <h5 className='text-center text-3xl mb-4'>
        Scroll down to see the animation
      </h5>
      
      <div className="h-screen">
      <AnimatedCard/>
      </div>

      <ScrollAnimation />

    </div>
  )
}

export default App