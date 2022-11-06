// @ts-nocheck
import { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Loader from '../src/components/loader/Loader'
import Container from '../src/components/container/Container'
export default function Home() {

  
const [loading,setLoading] = useState (true)
  //temp

  

  return (
    <AnimateSharedLayout type="crossfade">

    <AnimatePresence>
      
      {loading ?
      <motion.div key="loader">
        <Loader setLoading={setLoading} />
      </motion.div>:
      <Container />
    }
    </AnimatePresence>
    </AnimateSharedLayout>

  )
}
