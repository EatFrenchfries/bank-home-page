import { useEffect, useRef, useState } from 'react'

import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  const target = useRef()
  const [move, setMove] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0]
        if (ent.isIntersecting === true) {
          setMove(true)
        } else {
          setMove(false)
        }
      },
      {
        root: null,
        threshold: 0.05
      }
    )
    obs.observe(target.current)
  }, [])

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div ref={target} className={`w-full px-10 flex justify-between items-center md:flex-row flex-col sm:mb-3 mb-1 relative z-[1] -translate-x-[32px] opacity-0 ${move ? 'animate-move' : ''}`}>
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map(card => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
