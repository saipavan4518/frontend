import Axios from "axios";
import React from "react";

export default class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            fullname: "",
            regdno: "",
            email: "",
            password: "",
            profilepic: null,
            success:false,
            error:false,
            success_message:"",
            error_message:""
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

        const file = this.state.profilepic;
        let formdata = new FormData();
        formdata.append('username',this.state.username)
        formdata.append('fullname',this.state.fullname)
        formdata.append('regdno',this.state.regdno)
        formdata.append('email',this.state.email)
        formdata.append('password',this.state.password)
        formdata.append('profilepic',file)

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = "http://localhost:8110/api/user/register"
        Axios.post(url,formdata,config)
            .then((data) => {
                if(data.data.eid === 0){
                    // no error, success inserted
                    this.setState({
                        success:true,
                        success_message: data.data.details
                    })
                    window.setTimeout(()=>{
                        window.location = "/login"
                    },5000);
                }else{
                    //error in the database side
                    this.setState({
                        error:true,
                        error_message: data.data.details
                    })
                }
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render(){
        const Smessage = this.state.success === true ? <div className="alert alert-primary" role="alert">{this.state.success_message} <br /> Redirecting to Login in 5 seconds</div>: "";
        const Emessage = this.state.error === true ? <div className="alert alert-warning" role="alert">{this.state.error_message}</div>: "";
        const myStyleInput = {
            marginTop: "1vw",
            marginLeft:"35vw",
            width:"30vw"
        }
        return(
            <div style={myStyleInput}>
                <label style={{position:"center"}}>Register</label>
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
                        <input type="file" className="form-control-file" id="profilepic" name="profilepic" onChange={this.inputHandler} accept="image/*" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft:"10vw"}}>Submit</button>
                    <br />
                    {Smessage}
                    {Emessage}
                </form>
            </div>
        )
    }
}