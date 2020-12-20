import React from "react";
import { Redirect } from 'react-router-dom';

export default class Thread extends React.Component{
    constructor(){
        super();

        this.state={
            thread_id:"",
            ist:false,
        }
        this.handler = this.handler.bind(this);
    }

    handler(id){
        this.setState({
            thread_id:id,
            ist:true
        })
    }

    render(){
        if(this.state.ist === true){
            //now pass the thread to actual thread post.
            return <Redirect push to={{
                pathname:`/thread/${this.props.thread.thread_id}`,
                state:this.props.thread
            }} />
        }else{
            return(
                <div 
                    className="col-sm-3"
                    onClick={()=>this.handler(this.props.thread.thread_id)}
                >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.thread.user_id}</h5>
                                <p className="card-text">{this.props.thread.thread_subject}</p>
                                <p>{this.props.thread.thread_id}</p>
                                <p>{this.props.thread.thread_votes}</p>
                            </div>
                        </div> 
                    </div>
            )
        }
        
    }
}