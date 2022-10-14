import React, { useEffect, useRef, useState } from 'react'

import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components'
import arrowTop from './assets/arrowTop.svg'

import styles from './style'

const App = () => {
  const target = useRef()
  const [isDisplay, setIsDisplay] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0]
        if (ent.isIntersecting === false) {
          setIsDisplay(true)
        } else {
          setIsDisplay(false)
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-44px'
      }
    )
    obs.observe(target.current)

    return () => obs.disconnect()
  }, [])

  return (
    <div className="bg-primary w-full overflow-hidden">
      <button className={`${isDisplay ? 'fixed' : 'hidden'} bottom-10 right-3 z-20 p-4 rounded-full bg-black-gradient`} onClick={() => window.scrollTo(0, 0)}>
        <img src={arrowTop} alt="Go to top" className="sm:w-[32px] w-[24px] sm:h-[32px] h-[24px]" />
      </button>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div ref={target} className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingsmX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
