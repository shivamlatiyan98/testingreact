import React, { Component} from 'react';
import {connect} from 'react-redux';

import {savecomment} from "../actions";


class Commentbox extends Component{


    constructor(props){
        super(props);

        this.state={comment:''}

        this.handlechange=  this.handlechange.bind(this);
    }


    handlechange(event){

        this.setState({comment:event.target.value})

    }


    handlesubmit(event){

        event.preventDefault();
           // this.setState({comment:''})

         this.props.savecomment(this.state.comment);

    }


    render(){


        return (


        <form className="commentbox" onSubmit={this.handlesubmit.bind(this)} >


        <textarea onChange={(event)=>this.handlechange(event)} value={this.state.comment}></textarea>
        <button type='submit'>

            submit
        </button>
        </form>


        );

    }








}


function mapstatetoprops(state) {


    return{
        comments:state.comments
    }


}


export default connect(mapstatetoprops,{savecomment} )(Commentbox)


















