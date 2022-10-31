import styles from '../styles/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';


function Layout({ children }) {
   return (
      <div className={styles.Layout}>
         <Header />
         <main className='main'> {children}</main>
         <Footer />
      </div>
   )
}
export default Layout;