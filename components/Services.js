import styles from '../styles/Services.module.scss';
import ContainerMain from '../components/ContainerMain';
import ReusableTitle from './ReusableTitle';
import plane from '../public/images/plane.svg';
import gear from '../public/images/gear.svg';
import micro from '../public/images/micro.svg';
import satellite from '../public/images/satellite_dish.svg';
import Image from 'next/image';
function Services() {
   return (
      <section className={styles.Services}>
         <ContainerMain>
            <div className={styles.ServicesBody}>
               <div className={styles.ServicesTitle}>
                  <ReusableTitle subtitle="CATEGORY" title="We Offer Best Services" />
               </div>
               <div className={styles.ServicesContent}>
                  <div className={styles.ServicesCard}>
                     <div className={styles.ServicesImageSatellite}>
                        <Image src={satellite} width={67} height={70} alt='Plane' className={styles.Satellite} />
                     </div>
                     <div className={styles.ServicesText}>Calculated Weather </div>
                     <div className={styles.ServicesSubtext}>Built Wicket longer admire do barton vanity itself do in it.</div>
                  </div>
                  <div className={styles.ServicesCard}>
                     <div className={styles.ServicesImagePlane}>
                        <Image src={plane} width={114} height={73} alt='Plane' className={styles.Plane} />
                     </div>
                     <div className={styles.ServicesText}>Best Flights</div>
                     <div className={styles.ServicesSubtext}>Engrossed listening. Park gate sell they west hard for the.</div>
                  </div>
                  <div className={styles.ServicesCard}>
                     <div className={styles.ServicesImageMicro}>
                        <Image src={micro} width={40} height={69} alt='Plane' className={styles.Micro} />
                     </div>
                     <div className={styles.ServicesText}>Local Events</div>
                     <div className={styles.ServicesSubtext}>Barton vanity itself do in it. Preferd to men it engrossed listening. </div>
                  </div>
                  <div className={styles.ServicesCard}>
                     <div className={styles.ServicesImageGear}>
                        <Image src={gear} width={50} height={50} alt='Plane' className={styles.Gear} />
                     </div>
                     <div className={styles.ServicesText}>Customization</div>
                     <div className={styles.ServicesSubtext}>We deliver outsourced
                        aviation services for
                        military customers</div>
                  </div>
               </div>
            </div>
         </ContainerMain>
      </section>
   )
}
export default Services;