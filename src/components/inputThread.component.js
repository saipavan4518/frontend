import Axios from "axios";
import React from "react";


export default class InputComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            u_id: "17331A0590",
            forums: [],
            f_id: "",
            status:"approved",
            subject:"",
            set: false
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
        const data = new FormData();
        data.append("u_id",this.state.u_id);
        data.append("f_id",this.state.f_id);
        data.append("t_status",this.state.t_status);
        data.append("thread_subject",this.state.thread_subject);

        const url = "http://localhost:8110/api/forums/createthread"

        Axios.post(url,this.state)
            .then((data)=>{
                console.log(data)
                this.props.parentRender();
                this.setState({
                    set:true
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidMount(){
        const url = "http://localhost:8110/api/forums/getforums"
        Axios.get(url)
            .then((data) =>{
                this.setState({
                    forums: data.data.map(f => f)
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render(){
        const options = this.state.forums.map((forum) =>{
            return <option key={forum.forum_id} value={forum.forum_id}>{forum.forum_name}</option>
        })
        return(
            <div>
                
                <form className="user" onSubmit={this.submitHandler}>
                    <div className="form-group"><input className="form-control form-control-user" type="text" id="thread_subject" name="subject"  placeholder="Ask your Question" onChange={this.inputHandler}/></div>
                    <select class="form-control" name="f_id" onChange={this.inputHandler}>
                        <option>Forum Name</option>
                        {options}
                    </select>
                    <br />
                    <button className="btn btn-primary btn-block text-white btn-user" type="submit">submit</button>
                    
                </form>
                {this.state.thread_subject}
                {this.state.f_id}
            </div>
        )
    }
}