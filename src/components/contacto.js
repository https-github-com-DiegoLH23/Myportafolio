import React from "react";

export default function Contacto (){
    return(
    <section  id="contacto" className="sec-contacto">
        <div className="container">        
            <div className="row">
                <div className="col-md-12">
                    <div className="cta">
                        <div className="cta-content">
                            <div class="site-heading">
                                <span className="site-title-tagline"><span className="fa fa-phone"> </span> Contactame</span>       
                                    <h1>Contacto</h1>
                                <h2 className="site-title">Vamos a <span>trabajar</span> juntos</h2>
                            </div>  
                                <p>¿Tienes un nuevo proyecto en mente? <span>Colaboremos</span> y construyamos algo increíble.<br /> 
                                Convirtamos esa idea en un producto aún mejor :)
                                </p><br />
                                <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">
                                Hablemos <span className="fa fa-phone"></span>
                                </a>                               
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    </section>
    )
}
