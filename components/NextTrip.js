import ContainerMain from '../components/ContainerMain';
import styles from '../styles/NextTrip.module.scss';
import Image from 'next/image';
import airport from '../public/images/airport.svg';
import choose from '../public/images/choose.svg';
import payment from '../public/images/payment.svg';
import bluedecore from '../public/images/bluedecore.png';
import rometrip from '../public/images/triprome.png';
import photo from '../public/images/photo.jpg';
function NextTrip() {
   return (
      <section className={styles.NextTrip}>
         <ContainerMain>
            <div className={styles.NextTripSteps}>
               <div className={styles.NextTripContent}>
                  <div className={styles.NextTripSubtitle}>
                     Easy and Fast
                  </div>
                  <div className={styles.NextTripTitle}>
                     Book your next trip in 3 easy steps
                  </div>
                  <div className={styles.NextTripCards}>
                     <div className={styles.NextTripCard}>
                        <div className={styles.CardIcon}>
                           <Image alt='icon' width={47} height={48} src={choose} />
                        </div>
                        <div className={styles.CardBody}>
                           <h5 className={styles.CardTitle}>Choose Destination
                           </h5>
                           <div className={styles.CardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                     </div>
                     <div className={styles.NextTripCard}>
                        <div className={styles.CardIcon}>
                           <Image alt='icon' width={47} height={48} src={payment} />
                        </div>
                        <div className={styles.CardBody}>
                           <h5 className={styles.CardTitle}>Make Payment
                           </h5>
                           <div className={styles.CardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                     </div>
                     <div className={styles.NextTripCard}>
                        <div className={styles.CardIcon}>
                           <Image alt='icon' width={47} height={48} src={airport} />
                        </div>
                        <div className={styles.CardBody}>
                           <h5 className={styles.CardTitle}>Reach Airport on Selected Date
                           </h5>
                           <div className={styles.CardSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className={styles.NextTripImages}>
                  <div className={styles.ImagesContainer}>
                     <Image src={bluedecore} width="354" height="367" alt='Decore' className={styles.BlueDecore} />
                     <Image src={photo} width="auto" height="auto" alt='Photo' className={styles.Photo} />
                     <Image src={rometrip} width="auto" height="auto" alt='Rome trip' className={styles.RomeTrip} />
                  </div>
               </div>
            </div>
         </ContainerMain>
      </section>
   )
}
export default NextTrip;