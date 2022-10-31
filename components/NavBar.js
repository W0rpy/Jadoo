import Link from "next/link";
import classes from '../styles/NavBar.module.scss';

function NavBar({ active, setActive }) {
   const activeList = [classes.ListItems];
   if (active) {
      activeList.push(classes.active)
   }
   let headerItems = [{ id: 1, item: 'Desitnations' }, { id: 2, item: 'Hotels' }, { id: 3, item: 'Flights' }, { id: 4, item: 'Bookings' }]

   return (
      <ul className={activeList.join(' ')}>
         {headerItems.map((headerItem) =>
            <li key={headerItem.id}>
               <Link legacyBehavior href="/">
                  <a className={classes.HeaderItem} onClick={() => { setActive(false) }}>
                     {headerItem.item}
                  </a>
               </Link>
            </li>
         )}
      </ul >
   )
}
export default NavBar;