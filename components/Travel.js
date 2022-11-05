import styles from '../styles/Travel.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import traveller from '../public/images/traveller.jpg';
import plane from '../public/images/plane.svg';
function Travel() {
   return (
      <section className={styles.Travel}>
         <div className={styles.TravelContainer}>
            <div className={styles.TravelContent}>
               <div className={styles.TravelBody}>
                  <div className={styles.TravelSubtitle}>
                     Best Destinations around the world
                  </div>
                  <h1 className={styles.TravelTitle}>
                     Travel, <span className={styles.Decore}>enjoy</span> and live a new and full life
                  </h1>
                  <div className={styles.TravelText}>
                     Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                  </div>
                  <div className={styles.TravelItems}>
                     <Link legacyBehavior href='/'><a className={styles.TravelLink}>Find out more</a></Link>
                     <button type='button' className={styles.TravelButton}>
                        <div className={styles.ButtonTriangle}></div>
                     </button>
                     <span>Play Demo</span>
                  </div>
               </div>
               <div className={styles.TravelImage}>
                  <div className={styles.ImageShell}>
                     <Image src={plane} width='auto' height='auto' alt='Plane' className={styles.Plane} />
                     <Image src={traveller} className={styles.Picture} alt='Traveller' fill sizes="(max-width: 1199.98px) 100vw, 33vw" />
                  </div>
               </div>
            </div>
         </div>
      </section >
   )
}
export default Travel;