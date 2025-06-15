import { motion } from 'framer-motion';
import { BouncingLoader } from './components/BouncingLoader';
import { Gestures } from './components/Gestures';
import './App.css';


function App() {
  return (
    <div>
      <h3 className="text-3xl font-bold underline ">Hello World!</h3>
      {/* <motion.div className="box" animate={{ scale: [1, 2, 3, 2, 1] }} transition={{ duration: 5 }} /> */}

      <BouncingLoader />

      <Gestures />
    </div>
  )
}

export default App