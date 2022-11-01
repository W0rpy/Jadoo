import styles from '../styles/FooterColumn.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import arrowDown from '../public/images/arrowdown.svg';
function FooterColumn({ title, columns }) {


   return (
      <div className={styles.FooterColumn}>
         <button type='button' className={styles.FooterBtn}>
            < span>{title}</span>
            <Image
               src={arrowDown} alt="Arrow down" width="auto" height="auto" className={styles.ArrowDown}
            />
         </button>
         <ul className={styles.FooterList}>
            {columns.map((column) => <li key={column}><Link legacyBehavior href='/'><a className={styles.FooterLink}>{column}</a></Link></li>)}

         </ul>
      </div>
   )
}
export default FooterColumn;