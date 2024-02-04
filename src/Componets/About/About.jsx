import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/hii.png")} alt="Me setting with a laptop"  
            className={styles.aboutImage} />
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"
                className={styles.aboutItemText} />
                <div>
                    <h3>Frontend Developer</h3>
                        <p>
                             I'm frontend developer with exprience in building responsive and optimized sites
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server icon" 
                className={styles.aboutItemText}/>
                <div>
                    <h3>Backend Developer</h3>
                    <p>
                         I have experience developing fast and optimised back-end systems and APIs
                     </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
