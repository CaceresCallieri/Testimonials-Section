import { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface TestimonialProps {
    index: number
    name: string
    quote: string
    text: string
    avatarURL: string
}

const Testimonial: FC<TestimonialProps> = ({ index, name, quote, text, avatarURL }) => {
    const controls = useAnimation()

    useEffect(() => { // Animate testimonial only when it mounts
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: index * 0.1 }
        })
    }, [controls, index])

    return (
        <motion.div className='testimonial'
            initial={{ opacity: 0, y: 200 }}
            animate={controls}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
        >
            <div className='person'>
                <motion.img src={avatarURL} alt="Profile picture of reviewer"
                />

                <div className="name-and-verification">
                    <p className='name'>{name}</p>
                    <p className='verification'>Verified Graduate</p>
                </div>
            </div>

            <h5 className='quote'>{quote}</h5>
            <p className='text'>{text}</p>
        </motion.div>
    )
}

export default Testimonial