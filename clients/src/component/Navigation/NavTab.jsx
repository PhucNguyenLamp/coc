// import React from 'react'
import { Link } from "react-router-dom"
import styles from "../Navigation/NavTab.module.css"
const NavTab = () => {
  return (
    <>
      <div className={styles.containerTwo}>
        <div className={styles.navMenu}>
          <ul className={styles.navList}>
            <li className={styles.navList}>
              <a href='/' className={styles.navLink}>Home Page</a>
            </li>

            <li className={styles.navList}>
              <a href='/reg' className={styles.navLink}>Register</a>
            </li>

            <li className={styles.navList}>
              <a href='/login' className={styles.navLink}>Login</a>
            </li>
          </ul>

        </div>
      </div>

    </>
  )
}

export default NavTab
