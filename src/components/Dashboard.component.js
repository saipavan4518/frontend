import React from "react";
import Axios from 'axios';

export default class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            joke_setup: "",
            joke_punchline:""
        }
    }
    componentDidMount(){
        const url = "https://official-joke-api.appspot.com/random_joke"
        Axios.get(url)
            .then((data)=>{
                const joke_setup = data.data.setup;
                const joke_punchline = data.data.punchline

                this.setState({
                    joke_setup: joke_setup,
                    joke_punchline: joke_punchline
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render(){
        return(
            <div id="page-top">
                <div id="wrapper">
                    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                        <div className="container-fluid d-flex flex-column p-0">
                            <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                                <div className="sidebar-brand-icon rotate-n-15"><i className="la la-angellist"></i></div>
                                <div className="sidebar-brand-text mx-3"><span>LMs</span></div>
                            </a>
                            <hr className="sidebar-divider my-0" />
                            <ul className="nav navbar-nav text-light" id="accordionSidebar">
                                <li className="nav-item"><a className="nav-link active" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="profile.html"><i className="fas fa-user"></i><span>Profile</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="table.html"><i className="fas fa-table"></i><span>Table</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="login.html"><i className="far fa-user-circle"></i><span>Login</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="register.html"><i className="fas fa-user-circle"></i><span>Register</span></a></li>
                            </ul>
                            <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                        </div>
                    </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                    </div>
                                </form>
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                                <h3 className="text-dark mb-0">Dashboard</h3>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 offset-xl-0">
                                    <div className="card"></div>
                                </div>
                                <div className="col">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary m-0 font-weight-bold">Joke Of The Day</h6>
                                        </div>
                                        <div className="card-body">
                                            <p className="m-0">{this.state.joke_setup}</p>
                                            <p className="m-0">{this.state.joke_punchline}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-xl-8">
                                    <div className="card shadow mb-4"></div>
                                </div>
                                <div className="col-lg-5 col-xl-4">
                                    <div className="card shadow mb-4"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary font-weight-bold m-0">Projects</h6>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="small font-weight-bold">Server migration<span className="float-right">20%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="sr-only">20%</span></div>
                                            </div>
                                            <h4 className="small font-weight-bold">Sales tracking<span className="float-right">40%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="sr-only">40%</span></div>
                                            </div>
                                            <h4 className="small font-weight-bold">Customer Database<span className="float-right">60%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}><span className="sr-only">60%</span></div>
                                            </div>
                                            <h4 className="small font-weight-bold">Payout Details<span className="float-right">80%</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="sr-only">80%</span></div>
                                            </div>
                                            <h4 className="small font-weight-bold">Account setup<span className="float-right">Complete!</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}><span className="sr-only">100%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs" >10:30 AM</span></div>
                                                    <div className="col-auto">
                                                        <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-1" /><label className="custom-control-label" for="formCheck-1"></label></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs" >11:30 AM </span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-2" /><label className="custom-control-label" for="formCheck-2" ></label></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row align-items-center no-gutters">
                                                    <div className="col mr-2">
                                                        <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs" >12:30 AM</span></div>
                                                    <div className="col-auto">
                                                        <div className="custom-control custom-checkbox"><input className="custom-control-input" type="checkbox" id="formCheck-3" /><label className="custom-control-label" for="formCheck-3"></label></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-primary shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Primary</p>
                                                    <p className="text-white-50 small m-0">#4e73df</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-success shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Success</p>
                                                    <p className="text-white-50 small m-0">#1cc88a</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-info shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Info</p>
                                                    <p className="text-white-50 small m-0">#36b9cc</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-warning shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Warning</p>
                                                    <p className="text-white-50 small m-0">#f6c23e</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-danger shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Danger</p>
                                                    <p className="text-white-50 small m-0">#e74a3b</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card text-white bg-secondary shadow">
                                                <div className="card-body">
                                                    <p className="m-0">Secondary</p>
                                                    <p className="text-white-50 small m-0">#858796</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"><span>Copyright © Brand 2020</span></div>
                        </div>
                    </footer>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a></div>
            </div>
        )
    }
}