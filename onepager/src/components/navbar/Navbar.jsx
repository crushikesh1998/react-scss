import {useState} from 'react'
import './Navbar.scss'
import Wrapper from '../../components/wrapper/Wrapper'
import Logo from '../../assets/logo.svg'
import Button from '../button/Button'
import {FaBars } from 'react-icons/fa'
const Navbar = () => {
  const[showMobileNav,setShowMobileNav] =useState(false);
  return (
    <nav className='navbar'>
      <Wrapper className='navbar__container'>
        <div className="navbar__logo">
        <a href="#"
        onClick={() =>setShowMobileNav(false)}
        >
            <img src={Logo} alt="" />
        </a>
        </div>

        <div className={`navbar__nav ${showMobileNav ? "showNav" : " "}`}>
            <ul className="navbar__links">
                <li 
                onClick={() =>setShowMobileNav(false)}
                ><a href="">Features</a></li>
                <li 
                onClick={() =>setShowMobileNav(false)}
                ><a href="">Pricing</a></li>
                <li 
                onClick={() =>setShowMobileNav(false)}
                ><a href="">FeedBack</a></li>
                <li 
                onClick={() =>setShowMobileNav(false)}
                ><a href="">Contacts</a></li>
                
            </ul>

            <a href='#'>
            <Button className='navbar__btn'>Try For Free</Button>
            </a>
        </div>
        <div className={`navbar__icon  ${showMobileNav ? "add-bg" : ""}`}
          onClick={()=>setShowMobileNav(!showMobileNav)}
        >
            <FaBars/>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar
