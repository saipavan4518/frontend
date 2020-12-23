import Axios from "axios";
import React from "react";
import { Redirect } from 'react-router-dom';

import "../assests/css/upvote.css"
import Toast from "./Toast.component";
import {socket} from "../services/socket"

export default class Thread extends React.Component{
    constructor(props){
        super(props);

        this.state={
            thread_id:this.props.thread.thread_id,
            ist:false,
            deletefailure:false,
            thread_votes: this.props.thread.thread_votes,
            isUp:0,
            isDown:0
        }
        this.handler = this.handler.bind(this);
        this.deleteThread = this.deleteThread.bind(this);
        this.uAdhandler = this.uAdhandler.bind(this);
    }

    handler(id){
        this.setState({
            thread_id:id,
            ist:true
        })
    }

    uAdhandler(id){
        //agenda
        // if isUP > 1 no upvotes anymore
        // if isUp == 0 and isDown == 0 then we should upvote and then make isUp + 1
        // if isDown > 0  no downvotes anymore
        // if isDown == 0  and isUp = 0 then we should downvote and then make isDown + 1 
        // if isUp == 1 action:upvote then we should downvote implicitly
        // if isDown == 1 action:downvote then we should upvote implicitly
        const upvote = `http://localhost:8110/api/forums/thread/${this.state.thread_id}/1989`
        const downvote = `http://localhost:8110/api/forums/thread/${this.state.thread_id}/2324`

        if(id === "1989" && this.state.isUp === 0 && this.state.isDown === 0){
            //upvote
            Axios.put(upvote)
                .then((data)=>{
                    // socket.emit("update_threads",{
                    //     thread_id:this.state.thread_id,
                    //     thread_votes: data.data.votes
                    // })
                    this.setState({
                        thread_votes: data.data.votes,
                        isUp: 1
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })

        }
        if(id === "1989" && this.state.isUp === 1){
            //downvote
            Axios.put(downvote)
                .then((data)=>{
                    // socket.emit("update_threads",{
                    //     thread_id:this.state.thread_id,
                    //     thread_votes: data.data.votes
                    // })
                    this.setState({
                        thread_votes: data.data.votes,
                        isUp: 0
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
        if(id === "2324" && this.state.isDown === 0 && this.state.isUp === 0){
            //downvote
            Axios.put(downvote)
                .then((data)=>{
                    // socket.emit("update_threads",{
                    //     thread_id:this.state.thread_id,
                    //     thread_votes: data.data.votes
                    // })
                    this.setState({
                        thread_votes: data.data.votes,
                        isDown: 1
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
        if(id === "2324" && this.state.isDown === 1){
            //upvote
            Axios.put(upvote)
                .then((data)=>{
                    // socket.emit("update_threads",{
                    //     thread_id:this.state.thread_id,
                    //     thread_votes: data.data.votes
                    // })
                    this.setState({
                        thread_votes: data.data.votes,
                        isDown: 0
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        }

        
    }


    // componentDidMount(){
    //     socket.on("update_threads_client",(data)=>{
    //         console.log("cleint success")
    //         if(data.thread_id === this.state.thread_id){
    //             this.setState({
    //                 thread_votes:data.thread_votes
    //             })
    //         }
    //     })
    // }


    deleteThread(id){
        console.log(id)
        const url = `http://localhost:8110/api/forums/deletethread/${id}`
        Axios.delete(url)
            .then((data)=>{
                if(data.data.eid === 0){
                    //emit the delete event
                    socket.emit("render_threads");
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

        const buttonCSS = {
            fontSize:"24px",
            paddingLeft:"10px",
            color:"blue"
        }
        const errorToast = this.state.deletefailure === true ? <Toast message="Deletion Failed" /> : ""
                        
        if(this.state.ist === true){
            //now pass the thread to actual thread post.
            return <Redirect push to={{
                pathname:`/forum/thread/${this.props.thread.thread_id}`,
                state:this.props.thread
            }} />
        }else{
            const upvoteImg = this.state.isUp === 0? 
                            <i className='fas fa-angle-up tup' style={buttonNotCSS} onClick={()=>{this.uAdhandler("1989")}}></i>
                        :   <i className='fas fa-angle-up tup' style={buttonCSS} onClick={()=>{this.uAdhandler("1989")}}></i>;
                        
                        
        const downvoteImg = this.state.isDown === 0?
                            <i className='fas fa-angle-down tup' style={buttonNotCSS} onClick={()=>{this.uAdhandler("2324")}}></i>
                        :   <i className='fas fa-angle-down tup' style={buttonCSS} onClick={()=>{this.uAdhandler("2324")}}></i>;
            return(
                <div className="col-sm-12"  >
                        
                        <div className="card thread">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-1 votes" style={{float:"left"}}>
                                        <div>
                                            {upvoteImg}
                                            <p style={{paddingLeft:"12px",paddingTop:"10px"}}>{this.state.thread_votes}</p>
                                            {downvoteImg}
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