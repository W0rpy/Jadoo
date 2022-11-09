import styles from '../styles/Header.module.scss';
import ContainerMain from '../components/ContainerMain';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo_header.svg';
import { useState, useEffect } from 'react';
import Popap from './Popap';
function Header() {
   const [burger, setBurger] = useState(false);
   const activeBurger = [styles.Burger];
   if (burger) {
      activeBurger.push(styles.active);
   }
   const [popapActive, setPopapActive] = useState(false);
   useEffect(() => {
      if (burger) {
         document.querySelector("body").classList.add('lock');
      } else {
         document.querySelector("body").classList.remove('lock');
      }
   }, [burger])

   return (
      <header className={styles.Header}>
         <ContainerMain>
            <div className={styles.HeaderBody}>
               <div className={styles.HeaderLogo} >
                  <Link href='/' onClick={() => { setBurger(false) }} className={styles.LogoLink}>
                     <Image
                        src={logo}
                        fill
                        alt='Logo'
                        sizes='33vw'
                        className={styles.LogoPicture}
                     />
                  </Link>
               </div>
               <div className={styles.HeaderNav}>
                  <NavBar active={burger} setActive={setBurger} />
                  <div className={styles.HeaderLogin}>
                     <button className={styles.LoginItem} type='button' onClick={() => setPopapActive(true)}>Login</button>
                  </div>
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
               <Popap popapActive={popapActive} setPopapActive={setPopapActive}>

                  <form className={styles.PopapForm}>
                     <button type='button' className={styles.BtnClose} onClick={() => setPopapActive(false)} >
                        <span></span>
                        <span></span>
                     </button>
                     <h3 className={styles.PopapText}>Username</h3>
                     <input type="text" className={styles.PopapInput} />
                     <h3 className={styles.PopapText}>Password</h3>
                     <input type="password" className={styles.PopapInput} />
                     <button type='button' className={styles.PopapBtn} onClick={(e) => { e.preventDefault() }}>Login</button >
                  </form>
               </Popap>
            </div>
         </ContainerMain>
      </header >
   )
}
export default Header;