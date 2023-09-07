import React from "react";
import { testimoniales } from "../data";


export default function Testinomios () {
    return(
        <div id="testimonios" className="testimonios">     
            <div class="site-heading">
                <span class="site-title-tagline"><i class="fa fa-book"></i> Testimonios</span>
                <h2 class="site-title">
                    Comentarios <span>valiosos</span> de mis clientes
                </h2>
            </div>
            <div className="carousel-contect">               
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./imagenes/user-02.jpg" class="d-block w-200" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <p>Some representative placeholder crepresentative placeholder crepresentative placeholder 
                                crepresentative placeholder crepresentative placeholder content for theepresentative placeholder content for the second slide.</p>
                                <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i><br/>
                                <h5>Ana HI</h5>
                                <span>Cliente</span>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src="./imagenes/user-03.jpg" class="d-block w-20" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p>Some representative placeholder crepresentative placeholder crepresentative placeholder 
                              crepresentative placeholder crepresentative placeholder content for theepresentative placeholder content for the second slide.</p>
                              <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i><br/>
                                <h5>Jhon Cesar J</h5>                           
                            <span>Cliente</span>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="./imagenes/user-04.jpg" class="d-block w-20" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p>Some representative placeholder crepresentative placeholder crepresentative placeholder 
                              crepresentative placeholder crepresentative placeholder content for theepresentative placeholder content for the second slide.</p>
                              <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i>  
                                <i class="fa fa-heart"> </i> 
                                <i class="fa fa-heart"> </i><br/>
                                <h5>Edgar Jhon </h5>
                            <span>Cliente</span>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            
                </div>
                   
            
    )
}
