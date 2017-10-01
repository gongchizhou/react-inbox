import React from 'react'
import Header from '../../components/Header/index.jsx'
import BackBtn from '../../components/Header/Back/index.jsx'
import TabBar from './TabBar/index.jsx'
import { getMailDetail } from '../../fetch/index.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mailActionCreator from '../../actions/mailAction'

import './style.scss'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detailItem: {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        let data = this.props.mailData;
        data = data.filter(function(el){
            return el.id == id;
        })
        this.setState({
            detailItem: data[0],
            isLike: data[0].isLike
        })
    }

    toggleLike(){
        const id = Number(this.props.match.params.id);
        this.setState({
            isLike: !this.state.isLike
        })
        this.props.mailAction.update(id);
    }

    render(){
        return(
            <div id="content" className="wrap">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                </div>
                <div className="content-bd">
                    <div className="info">
                        <div className="avatar">
                            <img src={ this.state.detailItem.imgUrl }/>
                        </div>
                        <div className="bio">
                            <div>{ this.state.detailItem.author }</div>
                            <div>Anthen@zimail.com on { this.state.detailItem.time }</div>
                        </div>
                    </div>
                    <div className="title">
                        <h2>{ this.state.detailItem.title }</h2>
                    </div>       
                    <div className="mail-body">
                        <p>{ this.state.detailItem.content }</p>
                    </div>
                </div>
                <TabBar>   
                    <div className="tab-edit"><i className="material-icons i-reply"></i></div>
                    <div className="tab-edit" onClick={this.toggleLike.bind(this)}><i className={`material-icons i-like ${this.state.isLike?'islike':''}`}></i></div>
                    <div className="tab-edit"><i className="material-icons i-delete"></i></div>
                </TabBar>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        mailData: state.mailData
    }
}

function mapDispatchToProps(dispatch){
    return{
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Content)