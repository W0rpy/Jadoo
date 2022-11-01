import styles from '../styles/Destinations.module.scss';
import ContainerMain from './ContainerMain';
import ReusableTitle from './ReusableTitle';
import Image from 'next/image';
import Arrow from '../public/images/arrow_location.svg';
function Destinations() {
   return (
      <section className={styles.Destinations}>
         <ContainerMain>
            <div className={styles.DestinationsBlock}>
               <div className={styles.DestinationsTitle}>
                  <ReusableTitle subtitle="Top Selling" title="Top Destinations" />
               </div>
               <div className={styles.DestinationsContent}>
                  <div className={styles.DestinationsCard}>
                     <div className={styles.CardImage}></div>
                     <div className={styles.CardBody}>
                        <div className={styles.CardLocation}>
                           <div className={styles.CardPlace}> Rome, Italty</div>
                           <div className={styles.CardPriсe}>$5,42k</div>
                        </div>
                        <div className={styles.CardTour}>
                           <div className={styles.CardArrow}>
                              <Image src={Arrow} alt='Arrow Location' width={20} height={20} />
                           </div>
                           <div className={styles.CardDays}> 10 Days Trip</div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.DestinationsCard}>
                     <div className={styles.CardImage}></div>
                     <div className={styles.CardBody}>
                        <div className={styles.CardLocation}>
                           <div className={styles.CardPlace}>
                              London, UK
                           </div>
                           <div className={styles.CardPriсe}>
                              $4.2k
                           </div>
                        </div>
                        <div className={styles.CardTour}>
                           <div className={styles.CardArrow}>
                              <Image src={Arrow} alt='Arrow Location' width={20} height={20} />
                           </div>
                           <div className={styles.CardDays}>
                              12 Days Trip
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.DestinationsCard}>
                     <div className={styles.CardImage}></div>
                     <div className={styles.CardBody}>
                        <div className={styles.CardLocation}>
                           <div className={styles.CardPlace}>
                              Full Europe
                           </div>
                           <div className={styles.CardPriсe}>
                              $15k
                           </div>
                        </div>
                        <div className={styles.CardTour}>
                           <div className={styles.CardArrow}>
                              <Image src={Arrow} alt='Arrow Location' width={20} height={20} />
                           </div>
                           <div className={styles.CardDays}>
                              28 Days Trip
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </ContainerMain>
      </section>
   )
}
export default Destinations;