import React from "react";
import { educacions,experiencias,nuevos } from "../data";

export default function Skills (){
    return(
<div id="skill" className="experiencia-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="expert-content-info">
                    <div class="site-heading">
                        <span class="site-title-tagline"><i class="fa fa-book"></i> Mis Experiencias</span>
                        <h1>resumen</h1>
                        <h2 class="site-title">
                            Por qué contratarme para su <span>próximo</span> proyecto
                        </h2>
                    </div>
                    <p>
                    Desde que comencé mi viaje como desarrollador independiente.<br></br>
                    Creo sitios web receptivos exitosos que son rápidos, fáciles de usar y construidos con las mejores prácticas.
                    El área principal de mi experiencia es el desarrollo frontal, HTML, CSS, JS, la creación de aplicaciones web 
                    pequeñas y medianas, complementos personalizados, características, animaciones y codificación de diseños interactivos.
                    </p><br />
                    <a href="#" class="btn-principal">Descargar CV <i class="fa fa-download"></i></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="expert-content-wrapper">
                    <ul class="nav nav-pills" id="pills-tab-expert" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-tab-skill" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="true"><a>Habilidades</a></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-tab-experience" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false" tabindex="-1"><a>Experiencia</a></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-tab-education" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="false" tabindex="-1">Estudios</button>
                        </li>
                    </ul>

               <div class="tab-content" id="pills-tabContent-expert">
                        <div class="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-tab-skill" tabindex="0">
                            <div class="expert-skill-content">
                                
                                <div class="row" >
                                    {nuevos.map((nuevo) => (
                                    <div class="col-md-6">
                                        <div class="expert-skill-item">
                                            <div class="skill-icon">
                                                <img
                                                className="absolute object-cover object-center"
                                                src={nuevo.image} width={50}
                                                /> 
                                            </div>
                                            
                                            <div class="skill-progress">                                    
                                                <div class="skill-tag">
                                                 <div class="skill-progress"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">                                                        
                                                        <span>{nuevo.nombre}</span>
                                                </div>
                                                <div className="col-md-6">
                                                        <span class="skill-percentage">{nuevo.ok}%</span>
                                                </div>
                                                <div className="col-md-12"> <br />
                                                    <div className="container01">
                                                    <div className="progress01" >
                                                    </div>
                                                    </div>
                                                </div>                                                
                                                </div>                                                
                                            </div>
                                        </div>                                      
                                    </div>
                                ))}
                                </div>   
                            </div> 
                        </div> 

                        <div class="tab-pane fade" id="pills-experience" role="tabpanel" aria-labelledby="pills-tab-experience" tabindex="0">
                            <div class="expert-experience">
                                <div class="row">
                                    {experiencias.map((experiencia) => (
                                        <div class="col-md-6">                                   
                                            <div class="expert-item">
                                               <span>{experiencia.ano}</span>
                                                <p>{experiencia.empresa}</p>
                                                <h4>{experiencia.cargo}</h4>
                                            </div>
                                        </div>  
                                    ))}                    
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-tab-education" tabindex="0">
                            <div class="expert-education">
                                <div class="row">
                                {educacions.map((educacion) => (
                                    <div class="col-md-6">                                   
                                        <div class="expert-item">
                                            <span>{educacion.ano}</span>
                                            <p>{educacion.instituto}</p>
                                            <h4>{educacion.nombre}</h4>
                                        </div>
                                    </div>  
                                    ))}                     
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    )
}
