import React from "react";
import { Redirect,Route, Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        const loginSignup = <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>;
        const register = <Link className="nav-link" to="/register" >Register<span className="sr-only">(current)</span></Link>;
        const forum = <Link className="nav-link" to="/forum">Forum<span className="sr-only">(current)</span></Link>;
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p className="navbar-brand" >LMS</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {loginSignup}
                            </li>
                            <li className="nav-item">
                                {register}
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li>
                                {forum}
                            </li>
                        </ul>
                        </div>
                </nav>
            </div>
        );
    }
}