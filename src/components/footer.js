import React from "react";

export default function Footer  () {
        return(
            <footer id="footer" className="footer">               
                <div className="container">        
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-12 footer-contacto"> 
                            <div className="row">                           
                                <div className="col-md-2 col-xs-2 col-2  footer-contact-icon">
                                    <img src="./imagenes/phone.svg" alt=""></img>
                                </div> 
                                <div className="col-md-10 col-xs-10 col-10 footer-contact-content">
                                    <a href="tel:985394423">
                                    <p>Celular:</p>
                                    <h2>+51 985 394 423</h2>
                                    </a>  
                                </div>
                            </div>                                     
                        </div>   
                        <div className="col-md-4 col-sm-12 col-12 footer-contacto">
                            <div className="row">                         
                                <div className="col-md-2 col-xs-2 col-2 footer-contact-icon">
                                    <img src="./imagenes/email.svg" alt=""></img>
                                </div>   
                                <div className="col-md-10 col-xs-10 col-10 footer-contact-content">
                                    <a href="mailto:diego-lh23@outlook.com">
                                    <p>Correo:</p>
                                    <h2>diego-lh23@outlook.com</h2>
                                    </a>  
                                </div>
                            </div>        
                        </div>

                        <div className="col-md-4 col-sm-12 col-12 footer-redes">
                            <ul>
                                <div></div>
                                <li>
                                    <a href="https://www.facebook.com/DigitalHOMETEC" target="_blank">
                                        <span class="fa fa-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.link/l3u889" target="_blank">
                                        <span class="fa fa-whatsapp"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/diegolavadohinojosa/" target="_blank">
                                        <span class="fa fa-instagram"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/diego-lavado-hinojosa" target="_blank">
                                        <span class="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <div></div>
                            </ul>           
                        </div>                     
                    </div>            
                </div>
                
                <div className="footer-copyright">
                    <div className="row">
                        <div className="logo col-md-12 col-sm-12 col-12">
                            <img src="./imagenes/logo1.png" width={70}></img>
                            
                            <h4>Viviendo, aprendiendo y subiendo de nivel un día a la vez.</h4>
                        </div>
                        <div className="col-md-12 col-sm-12 col-12">
                            <span>© Copyright {new Date().getFullYear()} -- </span>
                            <span>
                             Diseñado por <a href="https://www.diegolavado.com"> Diego LH</a>
                            </span>
                        </div>
                    </div>                   
                </div>        
            </footer>                           
        )
    }
