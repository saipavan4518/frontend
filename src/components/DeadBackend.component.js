import React from "react";

import "../assests/css/deadbackend.css"

export default class ErrorPage extends React.Component{
    render(){
        const myStyle = {
            border:"1px solid black"
        }
        return(
            <div style={myStyle}>
                <section class="page_404">
                    <div class="container" style={myStyle}>
                        <div class="row">	
                            <div class="col-sm-12 ">
                                <div class="col-sm-10 col-sm-offset-1  text-center">
                                    <div class="four_zero_four_bg" style={myStyle}>
                                        <h1 class="text-center ">404</h1>
                                    </div>
                                    
                                    <div class="contant_box_404" style={myStyle}>
                                        <h3 class="h2">
                                        Look like you're lost
                                        </h3>
                                        
                                        <p>the page you are looking for not avaible!</p>
                                        
                                        <a href="/dashboard" class="link_404">Go to Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}