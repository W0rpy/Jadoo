import styles from '../styles/FooterColumn.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrowDown from '../public/images/arrowdown.svg';
import { useState } from 'react';
function FooterColumn({ title, columns }) {
   const [active, setActive] = useState(false);
   const footerArrow = [styles.ArrowDown];
   const footerList = [styles.FooterList];
   if (active) {
      footerArrow.push(styles.active);
      footerList.push(styles.active);
   }

   return (
      <div className={styles.FooterColumn}>
         <button type='button' className={styles.FooterBtn} onClick={() => {
            setActive(!active)
         }}>
            < span>{title}</span>
            <Image
               src={arrowDown} alt="Arrow down" width="auto" height="auto" className={footerArrow.join(" ")}
            />
         </button>
         <ul className={footerList.join(" ")}>
            {columns.map((column) => <li key={column}><Link legacyBehavior href='/'><a className={styles.FooterLink}>{column}</a></Link></li>)}

         </ul>
      </div>
   )
}
export default FooterColumn;