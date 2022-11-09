import styles from '../styles/Popap.module.scss';
function Popap({ children, popapActive, setPopapActive }) {
   const popapClass = [styles.PopapWrapper];
   if (popapActive) {
      popapClass.push(styles.active)
   }
   return (
      <div className={popapClass.join(' ')} onClick={() => setPopapActive(false)}>
         <div className={styles.PopapBody} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}
export default Popap;