import React, { useState } from "react";

export default function Header (){
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return(
        <header id="home" className="s-header">
            <div className="row s-header__nav-wrap">
                <nav className="nav">
                    <a href="#hero" className="nav__brand">
                      <img src="./imagenes/logo1.png" width={50}></img>
                    </a>
                    <ul className={active}>
                        <li className="nav__item">
                        <a  href="#hero">
                        Inicio
                        </a>
                        </li>
                        <li className="nav__item">
                        <a  href="#herramientas">
                        Servicios
                        </a>
                        </li>
                        <li className="nav__item">
                        <a  href="#skill">
                        Resumen
                        </a>
                        </li>
                        <li className="nav__item">
                        <a  href="#proyectos">
                        Proyectos
                        </a>
                        </li>
                        <li className="nav__item">
                        <a  href="#blogs">
                        Blogs
                        </a>
                        </li>
                        <li className="nav__item">
                        <a  href="#contacto">
                        Hola Diego
                        </a>
                        </li>
                    </ul>
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
           </div>
        </header>    
    )
}


