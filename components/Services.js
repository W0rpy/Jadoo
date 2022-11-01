import styles from '../styles/Services.module.scss';
import ContainerMain from '../components/ContainerMain';
import ReusableTitle from './ReusableTitle';
import plane from '../public/images/plane.svg';
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
                     <div className={styles.ServicesImage}>
                        <Image src={plane} width={135} height="auto" alt='Plane' className={styles.Plane} />
                     </div>
                     <div className={styles.ServicesText}>Best Flights</div>
                     <div className={styles.ServicesSubtext}>Engrossed listening. Park gate sell they west hard for the.</div>
                  </div>
               </div>
            </div>
         </ContainerMain>
      </section>
   )
}
export default Services;