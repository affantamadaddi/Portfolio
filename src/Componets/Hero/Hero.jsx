import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mohammad Affan Tamadaddi</h1>
        <p className={styles.description}>
        I'm Web-Developer. Reach out if you'd like to  learn more!</p>
        <a href="mailto:affantamadaddi4@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/software-development image.png") } alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}

export default Hero
