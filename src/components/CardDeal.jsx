import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} md:ml-10`}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Find the best Credit Card for your lifestyle and choose from categories like rewards, cash back and no annual fee.</p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-5/6 h-5/6 object-contain md:mr-10" />
    </div>
  </section>
)

export default CardDeal
