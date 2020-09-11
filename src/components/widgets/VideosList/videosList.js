import React, { Component } from 'react';
import './videosList.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/buttons';

class VideosList extends Component{

    
    state={
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    renderButton = () => {
        return this.props.loadmore ? 
        'loadmore'
         :
         <Button type="linkTo" cta="More Videos" linkTo="/videos" />   
    }



    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>NBA</strong>Videos</h3>
        : null
    }

    



    render(){
        return(
            <div className="videosList_wrapper">
                <h3><strong>NBA</strong>Videos</h3>
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    }

}
export default VideosList;