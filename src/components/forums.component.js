import React from "react";
import Axios from 'axios';

import Thread from './Thread.component';

export default class Forum extends React.Component{
    constructor(){
        super();
        this.state = {
            threads:[]
        }
    }

    componentDidMount(){
        const url = "http://localhost:8110/api/forums/getthreads"
        Axios.get(url)
            .then((data)=>{
                this.setState({
                    threads:data.data.map((thread)=>thread)
                })
            })
            .catch((error)=>console.log(error))
    }
    render(){
        const threads = this.state.threads.map((thread)=>{
            return <Thread key={thread.thread_id} thread={thread} />
        })
        return(
            <div>
                {threads}
            </div>
        )
    }
}