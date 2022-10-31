import styles from '../styles/Footer.module.scss';
import ContainerMain from '../components/ContainerMain';
import FooterColumn from './FooterColumn';
import Image from 'next/image';
function Footer() {
   const columnFirst = ['About', 'Careers', 'Mobile'];
   const columnSecond = ['Help/FAQ', 'Press', 'Affilates'];
   const columnThird = ['Airlinefees', 'Airline', 'Low fare tipsile'];

   return (
      <footer className={styles.Footer}>
         <ContainerMain>
            <div className={styles.FooterBlock}>
               <div className={styles.Content}>
                  <div className={styles.FooterLogo}>
                     <div className={styles.Logo}>Jadoo.</div>
                     <div className={styles.LogoText}>Book your trip in minute, get full
                        Control for much longer.
                     </div>
                  </div>
                  <div className={styles.FooterItems}>
                     <FooterColumn title={'Company'} columns={columnFirst} />
                     <FooterColumn title={'Contact'} columns={columnSecond} />
                     <FooterColumn title={'More'} columns={columnThird} />
                  </div>
                  <div className={styles.FooterNetworks}>
                     <div className={styles.FooterImages}>
                        <div className={styles.ImageFirst}><Image alt='Icon' src='/images/facebook.svg' width={6} height={13} /></div>
                        <div className={styles.ImageSecond}><Image alt='Icon' src='/images/instagram.svg' width={16} height={16} /></div>
                        <div className={styles.ImageFirst}><Image alt='Icon' src='/images/twitter.svg' width={16} height={13} /></div>
                     </div>
                     <div className={styles.FooterNetworksTitle}>
                        Discover our app
                     </div>
                     <div className={styles.FooterNetworksItems}>
                        <div className={styles.GooglePlay}>
                           <Image alt='Google Play' src='/images/google.png' width={107} height={35} />
                        </div>
                        <div className={styles.AppStore}>
                           <Image alt='App store' src='/images/appstore.png' width={100} height={35} />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.JadooCo}>
                  <span>All rights reserved@jadoo.co</span>
               </div>
            </div>
         </ContainerMain>
      </footer>
   )
}
export default Footer;