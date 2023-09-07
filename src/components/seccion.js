import React from "react";

export default function Seccion (){
    return(
    <div id="hero" className="s-hero">
        <div class="container">
        <div className="s-hero__bg rellax" data-rellax-speed={-7} />
            <div className="row s-hero__content">
                <div className="col-md-12 col-sm-12 col-12">
                    <div >
                        <h1>Hola, Soy Diego</h1>
                        <h2>Me encanta construir <span>aplicaciones</span> web</h2>
                        <h3>
                        Me esfuerzo por crear soluciones elegantes que sorprendan y deleiten a los usuarios, 
                        teniendo en cuenta las complejas dependencias técnicas para la implementación, 
                        la <span>escalabilidad</span> y la cordura del <span>desarrollador</span>.
                        </h3>
                        <div className="s-hero__content-social">
                            <a href="https://www.facebook.com/DigitalHOMETEC" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/diegolavadohinojosa/" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="https://wa.link/l3u889" target="_blank">
                                <i className="fa fa-whatsapp" aria-hidden="true" />
                            </a>
                            <a href="https://www.linkedin.com/in/diego-lavado-hinojosa" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                        </div><br />
                        <a id="scroll" href="#herramientas">
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}