import Axios from "axios";
import React from "react";
import { Redirect,Route, Link } from 'react-router-dom';

export default class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            fullname: "",
            regdno: "",
            email: "",
            password: "",
            profilepic: null
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(event){
        const {name, value} = event.target;
        if(name === "profilepic"){
            this.setState({
                profilepic: event.target.files[0]
            })
        }else{  
            this.setState({
                [name]:value
            })
        }
        
    }

    submitHandler(event){
        event.preventDefault();

        console.log(this.state.profilepic)

        let formdata = new FormData();
        formdata.append('username',`${this.state.username}`)
        formdata.append('fullname',`${this.state.fullname}`)
        formdata.append('regdno',`${this.state.regdno}`)
        formdata.append('email',`${this.state.email}`)
        formdata.append('password',`${this.state.password}`)
        formdata.append('profilepic',`${this.state.profilepic}`)

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = "http://localhost:8110/api/user/register"
        Axios.post(url,formdata,config)
            .then((data) => {
                console.log(data.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render(){
        const myStyleInput = {
            marginTop: "100px",
            marginLeft:"35vw",
            width:"30vw"
        }
        return(
            <div style={myStyleInput}>
                <label style={{position:"center"}}>Register</label>
                {this.state.username} <br />
                {this.state.fullname} <br />
                {this.state.regdno} <br />
                {this.state.email}  <br />
                {this.state.password} <br />
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="username" name="username" onChange={this.inputHandler} />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" id="fullname" name="fullname" onChange={this.inputHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Regd Number (Uppercase)</label>
                        <input type="text" className="form-control" id="regdno" name="regdno" placeholder="i.e. 17331A0590" onChange={this.inputHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.inputHandler} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={this.inputHandler} />
                    </div>
                    <div className="form-group">
                        <label>Profile Pic</label>
                        <input type="file" className="form-control-file" id="profilepic" name="profilepic" onChange={this.inputHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft:"10vw"}}>Submit</button>
                </form>
            </div>
        )
    }
}