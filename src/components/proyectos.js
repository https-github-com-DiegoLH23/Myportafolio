import React from "react";

export default function Proyectos(){
    return(
    <div id="proyectos" className="proyectos"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="site-heading">
                        <span class="site-title-tagline"><i class="fa fa-book"></i> Mis proyectos</span>
                        <h1>Proyectos</h1>
                        <h2 class="site-title">
                            Explorando mis <span>increibles</span> nuevos proyectos
                        </h2>
                    </div>                
                </div>
                <div class="col-lg-12">
                    <div className="proyecto-contect">               
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                    <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p04.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Sistema de ventas con PHP</h2>
                                                        <div class="size">
                                                            <h3>Diseño / Developer</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                    <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p02.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Ecommerce de Tecnologias</h2>
                                                        <div class="size">
                                                            <h3>Diseño / Developer</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                    <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p05.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Sistema Stock de Productos</h2>
                                                        <div class="size">
                                                            <h3>diseño / Developer</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                    <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p06.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Sistema Gestion de Matriculas</h2>
                                                        <div class="size">
                                                            <h3>Diseño / Developer</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                    <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p08.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Paginas Web Reponsivo</h2>
                                                        <div class="size">
                                                            <h3>Diseño IU/UX</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12 cajas">
                                                <div class="container">
                                                     <div class="card">
                                                        <div class="imgBx">
                                                        <img src="./imagenes/p07.png" />
                                                        </div>
                                                        <div class="contentBx">
                                                        <h2>Analista de Base de Datos</h2>
                                                        <div class="size">
                                                            <h3>Base de datos / Analista</h3>
                                                        </div> <br />
                                                        <a href="https://wa.link/l3u889" target="_blank" className="btn-principal">Más información</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                            </div>
                        </div>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>  &nbsp; &nbsp;
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>  &nbsp; &nbsp;
                        </div> 
                    </div>
                </div>            
            </div>
        </div>
    </div>
    )
}
