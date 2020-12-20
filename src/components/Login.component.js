import React from "react";
import Axios from "axios";

export default class Login extends React.Component{
    constructor(){
        super();

        this.state = {
            email: "",
            password: "",
            isF:false
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    inputHandler(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    submitHandler(event){
        event.preventDefault();
        const url = "http://localhost:8110/api/user/login"
        Axios.post(url, this.state)
            .then((data)=>{ 
                if(data.data.flag === true){
                    window.location = "/forum"
                }else{
                    this.setState({isF:true})
                }
            })
            .catch((error)=>{
                console.log(error)
            })

    }
    render(){
        const myStyleInput = {
            marginTop: "100px",
            marginLeft:"35vw",
            width:"30vw"
        }
        const redFlag = this.state.isF === true ? <div class="alert alert-danger" role="alert">Username and Password are wrong !!</div> :
                <div></div>;
        return(
            <div style={myStyleInput}>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control" id="username" name="email" onChange={this.inputHandler}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={this.inputHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft:"10vw"}}>Submit</button>
                </form> 
                <br />
                {redFlag}
            </div>
                
        )
    }
}