import Axios from "axios";
import React from "react";
import { Redirect } from 'react-router-dom';

import "../assests/css/thread.css"
import Toast from "./Toast.component";

export default class Thread extends React.Component{
    constructor(){
        super();

        this.state={
            thread_id:"",
            ist:false,
            deletefailure:false
        }
        this.handler = this.handler.bind(this);
        this.deleteThread = this.deleteThread.bind(this);
    }

    handler(id){
        this.setState({
            thread_id:id,
            ist:true
        })
    }

    deleteThread(id){
        //console.log(id)
        const url = `http://localhost:8110/api/forums/deletethread/${id}`
        Axios.delete(url)
            .then((data)=>{
                if(data.data.eid === 0){
                    this.props.parentRender();
                }else{
                    this.setState({
                        deletefailure:true
                    })
                }    
            })
            .catch((error)=>{console.log(error)})
    }

    render(){
        const buttonNotCSS = {
            fontSize:"24px",
            paddingLeft:"10px"
        }

        const errorToast = this.state.deletefailure === true ? <Toast message="Deletion Failed" /> : ""
                        
        if(this.state.ist === true){
            //now pass the thread to actual thread post.
            return <Redirect push to={{
                pathname:`/forum/thread/${this.props.thread.thread_id}`,
                state:this.props.thread
            }} />
        }else{
            return(
                <div className="col-sm-12"  >
                        
                        <div className="card thread">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-1 votes" style={{float:"left"}}>
                                        <div>
                                            <i className='fas fa-angle-up' style={buttonNotCSS}></i>
                                            <p style={{paddingLeft:"12px",paddingTop:"10px"}}>{this.props.thread.thread_votes}</p>
                                            <i className='fas fa-angle-down' style={buttonNotCSS} ></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 card-body" onClick={()=>this.handler(this.props.thread.thread_id)}>
                                        <h5 className="card-title">{this.props.thread.user_id}</h5>
                                        <p className="card-text">{this.props.thread.thread_subject}</p>
                                    </div>
                                    <div className="col-sm-1 delete">
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <button class="dropdown-item" onClick={()=>this.deleteThread(this.props.thread.thread_id)}>Delete</button>
                                                <button class="dropdown-item" >Report</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>
            )
        }
        
    }
}