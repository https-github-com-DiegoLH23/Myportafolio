import React from "react";
import {blogs} from "../data";

export default function Blogs (){
    return(
    <div id="blogs" className="blogs">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div className="blogs-titulo">
                        <div class="site-heading">
                            <span class="site-title-tagline"><i class="fa fa-book"></i> Mis Blogs</span>
                            <h1>Blogs</h1>
                            <h2 class="site-title">
                            Publicaciones de mis <span>blogs</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="row glass-card-conte">

                        {blogs.map((blog) => (
                            <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="glass-card">
                                <h3 class="glass-card-title">
                                    <a href="#"> {blog.subtitle} </a>
                                </h3>
                                <div class="tags">
                                    <a href={blog.link} target="_blank" rel="tag">{blog.title}</a>
                                </div>
                                <p>
                                    {blog.description}
                                </p>
                                </div></div>
                        ))}                            
                    </div>
                </div>         
            </div>
        </div>
    </div>                
    )
}