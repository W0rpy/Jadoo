import ContainerMain from '../components/ContainerMain';
import styles from '../styles/Sponsors.module.scss';
import Image from 'next/image';
import exprdia from '../public/images/expedia.png';
import axon from '../public/images/axon.png';
import jetstar from '../public/images/jetstar.png';
import qantas from '../public/images/qantas.png';
import alitalia from '../public/images/alitalia.png';

function Sponsors() {
   return (
      <section className={styles.Sponsors}>
         <ContainerMain>
            <div className={styles.SponsorsBody} >
               <div className={styles.SponsorsPicture} >
                  <Image src={axon} alt="sponsor" width={130} height={42} className={styles.SponsorPicture} />
               </div>
               <div className={styles.SponsorsPicture} >
                  <Image src={jetstar} alt="sponsor" width={137} height={46} className={styles.SponsorPicture} />
               </div>
               <div className={styles.SponsorsPicture} >
                  <Image src={exprdia} alt="sponsor" width={206} height={59} />
               </div>
               <div className={styles.SponsorsPicture} >
                  <Image src={qantas} alt="sponsor" width={162} height={32} className={styles.SponsorPicture} />
               </div>
               <div className={styles.SponsorsPicture} >
                  <Image src={alitalia} alt="sponsor" width={94} height={21} className={styles.SponsorPicture} />
               </div>
            </div>
         </ContainerMain>
      </section >
   )
}
export default Sponsors;