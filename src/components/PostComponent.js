import Axios from "axios";
import React from "react";

export default class PostComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            postID:this.props.post.post_id,
            postvotes: this.props.post.post_votes,
            isUpVoted: false,
            isDownVoted: false
        }
        this.uAdhandler = this.uAdhandler.bind(this);
    }
    uAdhandler(id){
        //agenda
        // if isUP > 1 no upvotes anymore
        // if isUp == 0 and isDown == 0 then we should upvote and then make isUp + 1
        // if isDown > 0  no downvotes anymore
        // if isDown == 0  and isUp = 0 then we should downvote and then make isDown + 1
        // if isUp == 1 action:upvote then we should downvote implicitly
        // if isDown == 1 action:downvote then we should upvote implicitly
        const upvote = `http://localhost:8110/api/forums/posts/${this.state.postID}/1989`
        const downvote = `http://localhost:8110/api/forums/posts/${this.state.postID}/2324`

        if(id === 1989 && !this.state.isDownVoted){

			if(this.state.upVoted){
				console.log("Change Upvote to False")
                Axios.put(downvote)
                    .then((data)=>{
                        this.setState({
                            postvotes: data.data.votes,
                        })
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
			}else{
				console.log("Upvote a post")
                Axios.put(upvote)
                    .then((data)=>{
                        this.setState({
                            postvotes: data.data.votes,
                        })
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
			}

			//Update State
			this.setState(prevState => ({
				upVoted: !prevState.upVoted
			}));
		}
		if(id === 2324 && !this.state.upVoted){

			if(this.state.downVoted){
				console.log("Change downvote to False")
                Axios.put(upvote)
                    .then((data)=>{
                        this.setState({
                            postvotes: data.data.votes,
                        })
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
			}else{
				console.log("Downvote a post")
                Axios.put(downvote)
                    .then((data)=>{
                        this.setState({
                            postvotes: data.data.votes,
                        })
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
			}

			//Updating State Variable
			this.setState(prevState => ({
				downVoted: !prevState.downVoted
			}))
		}
    }
    render(){
        const styleCard = {
            width:"100%",
            backgroundColor:"yellow"
        }
        const buttonNotCSS = {
            fontSize:"24px"
        }

        const buttonCSS = {
            fontSize:"24px",
            color:"red"
        }

        const upvoteImg = !this.state.isUpVoted ?
                            <i className='fas fa-angle-up' style={buttonNotCSS} onClick={()=>{this.uAdhandler(1989)}}></i>
                        :   <i className='fas fa-angle-up' style={buttonCSS} onClick={()=>{this.uAdhandler(1989)}}></i>;


        const downvoteImg = !this.state.isDownVoted?
                            <i className='fas fa-angle-down' style={buttonNotCSS} onClick={()=>{this.uAdhandler(2324)}}></i>
                        :   <i className='fas fa-angle-down' style={buttonCSS} onClick={()=>{this.uAdhandler(2324)}}></i>;

        return(
            <div className="row">
                <div className="card" style={styleCard}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.user_id}</h5>
                        <p className="card-text">{this.props.post.post_subject}</p>
                        <img src={this.props.post.post_img} alt={this.props.post.user_id} width="200" height="200" />
                        <p>{this.props.post.post_img}</p>
                        <p>{this.state.postvotes}</p>
                        {upvoteImg}
                        {downvoteImg}
                        </div>
                </div>
            </div>
        )
    }
}
