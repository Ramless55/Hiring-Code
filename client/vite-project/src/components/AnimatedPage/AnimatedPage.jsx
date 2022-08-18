import {motion} from 'framer-motion'

const AnimatedPage = ({children}) => {

    const animation = {
        initial:{opacity: 0 , x: 100 , overflow:"hidden"},
        animate:{opacity: 1 , x: 0 , overflow:"hidden"},
        exit:{opacity: 0 , x: -100 , overflow:"hidden"}
      }

  return (
    <motion.div variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: 'easeInOut' ,duration: 0.25}}
    >
        {children}
    </motion.div>
  )
}

export default AnimatedPage