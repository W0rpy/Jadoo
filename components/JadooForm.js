import styles from '../styles/JadooForm.module.scss';
import ContainerMain from '../components/ContainerMain';
import { useState } from 'react';
function JadooForm() {

   const [inputValue, setInputValue] = useState("");
   return (
      <section className={styles.JadooForm}>
         <ContainerMain>
            <div className={styles.JadooBody}>
               <div className={styles.JadooDecore}>
                  <form method='#' action='#' className={styles.Form}>
                     <div className={styles.FormText}>Subscribe to get information, latest news and other
                        interesting offers about Jadoo</div>
                     <div className={styles.Subscribe}>
                        <input className={styles.SubscribeInput} value={inputValue} type='text' placeholder='Your email' onChange={e => setInputValue(e.target.value)} />
                        <button type='button' onClick={(e) => { e.preventDefault() }} className={styles.SubscribeButton}>Subscribe</button>
                     </div>
                  </form>
               </div>
            </div>
         </ContainerMain>
      </section >
   )
}
export default JadooForm;