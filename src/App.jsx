import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/logo.svg'
import heroDesktop from './images/image-hero-desktop.png'
import heroMobile from './images/image-hero-mobile.png'
import hamburger from './images/icon-menu.svg'
import planning from './images/icon-planning.svg'
import reminders from './images/icon-reminders.svg'
import todo from './images/icon-todo.svg'
import calender from './images/icon-calendar.svg'
import close from './images/icon-close-menu.svg'
import audiophile from './images/client-audiophile.svg'
import databiz from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import arrowUp from './images/icon-arrow-up.svg'
import arrowDown from './images/icon-arrow-down.svg'



function App() {
  const [features,setFeatures] = useState(0)
  const feauturesClass = features == 0 ? '' : 'feautures'
  const featuresArrow =  features == 0 ? arrowDown : arrowUp

  const [company,setCompany] = useState(0)
  const companyClass = company == 0 ? '': 'company'
  const companyArrow = company == 0 ? arrowDown : arrowUp

  const [menu , setMenu] = useState(0)
  const ham = menu == 0 ? hamburger : close
  const navList = menu == 0 ? 'opoku' : 'site-list'
 







  return (
    <>

      <header className="site-header">
        <div className="site-logo">

          <img src={logo} alt="" />

        </div>

        <nav className={navList}>


          <ul className="nav-items">


            <button className='close-toggler mobile' onClick={()=> setMenu(0)}><img src={close} alt="" /></button>

            

          
            <li>


              <div onClick={()=> setFeatures(features == 0 ? 1:0)} className="feautures-click">
                <span>Features</span>
                <img src={featuresArrow} alt="" />
              </div>


              <ul className={feauturesClass}>
                <li>
                  <a href="#">
                    <img src={todo} alt="" className='icons' />
                    <span>Todo List</span>

                  </a>

                </li>

                <li>
                  <a href="#">
                    <img src={calender} alt="" className='icons' />
                    <span>Calender</span>

                  </a>
   
                </li>

                <li>
                  <a href="#">
                    <img src={reminders} alt="" className='icons' />
                    <span>Reminders</span>

                  </a>
           
                </li>

                <li>
                  <a href="#">
                      <img src={planning} alt="" className='icons' />
                      <span>Planning</span>

                  </a>

                </li>


              </ul>


            </li>


            <li>
              <div className='company-click' onClick={()=> setCompany(company==0 ? 1:0)}>
                <span>Company</span>
                <img src={companyArrow} alt="" />
              </div>


              <ul className={companyClass}>

                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our team</a>
                </li>
                <li><a href="">Blog</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>


            






          </ul>




          <div className="nav-buttons">
            <a href="" className="login">login</a>
            <a href="" className="register">Register</a>
          </div>
        </nav>


        <button className="toggler mobile"onClick={()=> setMenu(1)}><img src={hamburger} alt="" /></button>



      </header>




      <main>

        <section className="hero-container">

          <div className="hero-info">

            <h1>Make <br /> remote work</h1>
            <p>Get your team in sync , no matter your location, streamline processes, create team rituals and watch productivity soar </p>

            <div className="learn-more-button">
              <a href="#" className="learn-more">learn more </a>
            </div>

            <ul className="company-logo">
              <li><a href="#"><img src={databiz} alt="" /></a></li>
              <li><a href="#"><img src={audiophile} alt="" /></a></li>
              <li><a href="#"><img src={meet} alt="" /></a></li>
              <li><a href="#"><img src={maker} alt="" /></a></li>
            </ul>


          </div>


          <div className="hero-image">

            <picture>
              <source srcSet={heroDesktop} media='(min-width:48rem)' />
              <source srcSet={heroMobile} media='' />
              <img src={heroMobile} alt="" />
            </picture>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
