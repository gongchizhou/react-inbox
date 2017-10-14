import React from 'react'
import Header from '../../components/Header'
import BackBtn from '../../components/Header/Back'
import TabBar from './TabBar'
import { getMailDetail } from '../../fetch'
import {Link} from 'react-router-dom'
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
        let data;
        if(this.props.location.state === 'sent'){
            data = this.props.sendData;
        }else if(this.props.location.state === 'trash'){
            data = this.props.trashData;
        }else{
            data = this.props.mailData;
        }
        data = data.filter(function(el){
            return el.id == id;
        })
        
        const isLike = data[0].isLike ? data[0].isLike : false;
        this.setState({
            detailItem: data[0],
            isLike: isLike
        })
        
    }

    toggleLike(){
        const id = Number(this.props.match.params.id);
        this.setState({
            isLike: !this.state.isLike
        })
        this.props.mailAction.update(id);
    }

    delete(){
        const item = {
            id: 1 + this.props.trashData.length,
            address: this.state.detailItem.address,
            title: this.state.detailItem.title,
            author: this.state.detailItem.author,
            time: this.state.detailItem.time,
            imgUrl: this.state.detailItem.imgUrl,
            content: this.state.detailItem.content,
            isLike: false
        }
        this.props.mailAction.remove(this.state.detailItem);
        this.props.mailAction.addTrash(item);
        window.history.back();
    }

    render(){
        return(
            this.state.detailItem?
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
                            <div>{ this.state.detailItem.address} on { this.state.detailItem.time }</div>
                        </div>
                    </div>
                    <div className="title">
                        <h2>{ this.state.detailItem.title }</h2>
                    </div>       
                    <div className="mail-body">
                        <p>{ this.state.detailItem.content }</p>
                    </div>
                </div>
                {
                    this.props.location.state === '' || this.props.location.state === 'liked'?
                    <TabBar>   
                        <div className="tab-edit"><Link to={`/compose/${this.state.detailItem.address}`}><i className="material-icons i-reply"></i></Link></div>
                        <div className="tab-edit" onClick={this.toggleLike.bind(this)}><i className={`material-icons i-like ${this.state.isLike?'islike':''}`}></i></div>
                        <div className="tab-edit" onClick={this.delete.bind(this)}><i className="material-icons i-delete"></i></div>
                    </TabBar>:''
                }

            </div>
            :<div className="empty mt0"><span>you don't have any email yet</span></div>
        )
    }
}

function mapStateToProps(state){
    return{
        mailData: state.mailData,
        sendData: state.sendData,
        trashData: state.trashData
    }
}

function mapDispatchToProps(dispatch){
    return{
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Content)