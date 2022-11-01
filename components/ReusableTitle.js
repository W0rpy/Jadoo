import styles from '../styles/Reusable.module.scss';
function ReusableTitle(props) {
   return (
      <div className={styles.ReusableTitle}>
         <div className={styles.Subtitle}>{props.subtitle}</div>
         <div className={styles.Title}>{props.title}</div>
      </div>
   )
}
export default ReusableTitle;