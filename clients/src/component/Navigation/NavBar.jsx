// import React from 'react'
// import { FaArtstation } from "react-icons/fa";
// import { Link } from 'react-router-dom'
import { Link, useSearchParams } from "react-router-dom";
import styles from "../Navigation/NavBar.module.css"
import { RiReactjsLine, RiMenu3Fill, RiDeleteBack2Line } from '@remixicon/react';
import { useState } from "react";
import NavTab from "./NavTab";
const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClickOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header>
                <Link className={styles.navData}>
                    <RiReactjsLine className={styles.reactIcon} />
                    Coding Online Compiler

                </Link>
                <div
                    className={styles.navIcon}
                    onClick={onClickOpen}
                    id='navIcon'
                >
                    {!isMenuOpen && <RiMenu3Fill className={styles.navIconOpen} />}
                    {isMenuOpen && <RiDeleteBack2Line className={styles.navIconClose} />}
                </div>
            </header>
            {isMenuOpen && <NavTab />}
        </>
    )
}

export default NavBar
