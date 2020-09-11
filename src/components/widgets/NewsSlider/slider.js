import React, { Component } from 'react';
import axios from 'axios';

import Slidertemplates from './slider_templates';
import { URl } from '../../../config';


class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`${URl}/articles?_start=${this.props.start}&_end=${this.props.amount} `)
            .then( response => {
                this.setState({
                    news:response.data
                })
            })
    }


    render() {
       
        return (
            <div>
                <Slidertemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        )
    }
}
export default NewsSlider;