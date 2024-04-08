// import React from 'react'
import {RiGithubFill} from '@remixicon/react'
import { useState } from "react"
import styles from "./LoginForm.module.css"
const LoginForm = () => {

    const [nameUser, setNameUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")

    return (
        <section className={styles.formBackground}>

            <div className={styles.formContainer}>
                <div className={styles.divForm}>
                    <div className={styles.titleLogin}>
                        Login Form
                    </div>
                    <form className={styles.formForm}>
                        <div className={styles.inputName}>
                            <label htmlFor="type" className={styles.nameType}>Account Name</label>

                            <input type="text" id="title" value={nameUser} onChange={(e) => setNameUser(e.target.value)} className={styles.nameTypeID} placeholder="Enter your name" required />
                        </div>

                        <div className={styles.inputName}>
                            <label htmlFor="type" className={styles.nameType}>Password</label>

                            <input type="text" id="title" value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)} className={styles.nameTypeID} placeholder="Enter your password" required />
                        </div>


                        <div className={styles.LoginGithub}>

                            <p>Or</p>
                            
                            <div className={styles.github}>
                                <RiGithubFill/>
                                <p>Login With Github</p>

                            </div>
                            <div className={styles.buttonWrapper}>
                                <button className={styles.buttonLogin}>Login</button>
                            </div>
                        </div>
                        


                        




                    </form>
                </div>

            </div>

        </section>
    )
}

export default LoginForm
