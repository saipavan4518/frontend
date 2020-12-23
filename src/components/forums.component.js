import React from "react";
import Axios from 'axios';
import {socket} from '../services/socket'

import Thread from './Thread.component';
import ErrorPage from './DeadBackend.component';
import InputComponent from './inputThread.component';

export default class Forum extends React.Component{
    constructor(){
        super();
        this.state = {
            threads:[],
            isFailed: false,
            normalUpdate:false
        }
    }

    componentDidMount(){
        socket.on("render_threads_client",()=>{
            console.log("rendering the threads")
            const url = "http://localhost:8110/api/forums/getthreads"
            Axios.get(url)
                .then((data)=>{
                    this.setState({
                        threads:data.data.map((thread)=>thread)      
                    })               
                })
                .catch((error)=>{
                    if(error.response){
                        console.log("saipavan")
                        console.log(error.response.status);
                    }else{
                        this.setState({
                            isFailed:true
                        })
                    }
                })
        })

        const url = "http://localhost:8110/api/forums/getthreads"
            Axios.get(url)
                .then((data)=>{
                    this.setState({
                        threads:data.data.map((thread)=>thread)      
                    })               
                })
                .catch((error)=>{
                    if(error.response){
                        console.log("saipavan")
                        console.log(error.response.status);
                    }else{
                        this.setState({
                            isFailed:true
                        })
                    }
                })

    }

    render(){
        if(this.state.isFailed === true){
            return(
                <ErrorPage />
            );
        }else{
            const threads = this.state.threads.map((thread)=>{
                return <Thread key={thread.thread_id} thread={thread}/>
            })
            return(
                <div className="main-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9" style={{backgroundColor:"yellow"}}>
                                {threads}
                            </div>
                            <div className="col-lg-3" style={{backgroundColor:"pink"}}>
                                <p>News</p>
                            </div>
                        </div>
                        <div className="row">
                            <InputComponent />
                        </div>
                    </div>
                </div>
            )
        }
    }
}
