import styles from '../styles/ContainerMain.module.scss';

function ContainerMain({ children }) {
   return (
      <div className={styles.Container}>
         {children}
      </div>
   )
}
export default ContainerMain;