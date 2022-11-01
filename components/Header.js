import styles from '../styles/Header.module.scss';
import ContainerMain from '../components/ContainerMain';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
function Header() {

   const [burger, setBurger] = useState(false);
   const activeBurger = [styles.Burger];
   if (burger) {
      activeBurger.push(styles.active);;
   }

   return (
      <header className={styles.Header}>
         <ContainerMain>
            <div className={styles.HeaderBody}>
               <div className={styles.HeaderLogo} >
                  <Link href='/' onClick={() => { setBurger(false) }}>
                     <Image
                        src="/images/logo_header.svg"
                        width={115}
                        height={34}
                        alt='Logo'
                        priority={true}
                     />
                  </Link>
               </div>
               <div className={styles.HeaderNav}>
                  <NavBar active={burger} setActive={setBurger} />
                  <div className={styles.HeaderLogin}>
                     <Link legacyBehavior href='/'>
                        <a className={styles.LoginItem}>Login</a>
                     </Link></div>
                  <div className={styles.HeaderSignUp}>
                     <Link legacyBehavior href='/'>
                        <a className={styles.SignUpItem}>Sign up</a>
                     </Link>
                  </div>
                  <div className={styles.HeaderLanguage}>
                     <button type='button' className={styles.ChangeLanguage}>
                        <span>EN</span>
                        <Image src="/images/arrowdown.svg" width={9} height={5} priority={true} alt="Arrow down" />
                     </button>
                  </div>
                  <div className={styles.HeaderBurger}>
                     <button type='button' className={activeBurger.join(' ')} onClick={() => { setBurger(!burger) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </ContainerMain>
      </header>
   )
}
export default Header;