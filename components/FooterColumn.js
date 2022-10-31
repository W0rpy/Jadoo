import styles from '../styles/FooterColumn.module.scss';
import Link from 'next/link';
import Image from 'next/image';
function FooterColumn({ title, columns }) {
   return (
      <div className={styles.FooterColumn}>
         <button type='button' className={styles.FooterBtn}>
            < span>{title}</span>
            <Image
               src="/images/arrowdown.svg" width={9} height={5} priority alt="Arrow down"
            />
         </button>
         <ul className={styles.FooterList}>
            {columns.map((column) => <li key={column}><Link legacyBehavior href='/'><a className={styles.FooterLink}>{column}</a></Link></li>)}

         </ul>
      </div>
   )
}
export default FooterColumn;