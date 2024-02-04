import style from './App.module.css'
import About from './Componets/About/About'
import Contact from './Componets/Contact/Contact'
import Experience from './Componets/Experience/Experience'
import Hero from './Componets/Hero/Hero'
import Navbar from './Componets/Navbar/Navbar'
import Projects from './Componets/Projects/Projects'

const App = () => {
  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
