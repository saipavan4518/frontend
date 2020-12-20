import Axios from "axios";
import React from "react";

import PostComponent from './PostComponent';

export default class RenderThread extends React.Component{
    constructor(props){
        super(props);

        this.state={
            thread:this.props.location.state,
            posts:[]
        }
    }

    componentDidMount(){
        //retireve all the posts from the db with the thread id
        const url = `http://localhost:8110/api/forums/posts/getpost/${this.state.thread.thread_id}`
        Axios.get(url)
            .then((results)=>{
                this.setState({
                    posts: results.data.map(post => post)
                })
            })
            .catch((error)=>console.log(error))
    }
    render(){
        const styleCard = {
            width:"100%"
        }
        const postsR = this.state.posts.map((post)=>{
            return <PostComponent key={post.post_id} post={post}/>
        })
        return(
            <div>
                <div className="row">
                    <div className="card" style={styleCard}>
                        <div className="card-body">
                            <h5 className="card-title">{this.state.thread.user_id}</h5>
                            <p className="card-text">{this.state.thread.thread_subject}</p>
                            <p>{this.state.thread.thread_id}</p>
                            <p>{this.state.thread.thread_votes}</p>
                        </div>
                    </div>
                </div>
                {postsR}
            </div>
            
            
        )
    }
}