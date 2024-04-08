import React,{useRef, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import {Link} from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setmenu] = useState("home")
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }


  return (
    <div className="navbar">
        <img style={{height:"70px"}} src={logo} alt="Logo" />
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <Link  to="home" spy={true} smooth={true} offset={10} duration={500} className="desktopmenulist"> <p className="li" onClick={()=>setmenu("home")} > Home</p>{menu==="home"?<img src={underline} alt="" />:<></> }</Link>
            <Link  to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist"> <p className="li" onClick={()=>setmenu("about")} > About</p>{menu==="about"?<img src={underline} alt="" />:<></> }</Link>
            <Link  to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist"> <p className="li" onClick={()=>setmenu("services")} > Services</p>{menu==="services"?<img src={underline} alt="" />:<></> }</Link>
            <Link  to="work" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist"> <p className="li" onClick={()=>setmenu("work")} > Work</p>{menu==="work"?<img src={underline} alt="" />:<></> }</Link>
            <Link  to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist"> <p className="li" onClick={()=>setmenu("contact")} > Contact</p>{menu==="contact"?<img src={underline} alt="" />:<></> }</Link>

        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar