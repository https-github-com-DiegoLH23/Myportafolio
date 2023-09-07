import './App.css';
import React from 'react';

import Header from "./components/header";
import Seccion from "./components/seccion"
import Testimonios from "./components/testimonios";
import Herramientas from './components/herramientas';
import Skills from './components/skills';
import Blogs from './components/blogs';
import Contacto from './components/contacto';
import Proyectos from './components/proyectos';

import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Seccion />
      <Herramientas />
      <Skills />  
      <Proyectos />
      {/* <Testimonios /> */}
      <Blogs />
      <Contacto />
      <Footer /> 
    </div>
  );
}