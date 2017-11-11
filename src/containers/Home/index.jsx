import React from 'react'
import {connect} from 'react-redux'
import MailList from '../MailList'
import HomeHeader from '../../components/HomeHeader'
import Sider from '../../components/Sider'
import ComposeBtn from '../../components/ComposeBtn'

import './style.scss'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showNav:false,
            filter:null,
            scroll:{}
        }
    }

    showNav(){
        this.setState({
            showNav: true
        })
    }

    hideNav(){
        this.setState({
            showNav: false
        })
    }

    setPageState(state){
        this.setState({
            filter: state
        }) 
    }

    scrollHandle(){
        this.state.scroll();
    }

    setScrollFn(fn){
        this.setState({
            scroll: fn
        })
    }

    render(){
        return(
            <div id="home" className="wrap">
                <div id="main-wrap" className={this.state.showNav?'open':''}>
                    <div className="scroll-wrap" onScroll={this.scrollHandle.bind(this)}>
                        <HomeHeader showNav={this.showNav.bind(this)}/>
                        {
                            this.state.filter == 'liked'?
                            <MailList mailList={this.props.mailData.filter((item) =>  item.isLike === true )} state={this.state.filter}/>
                            :this.state.filter == 'sent'?
                            <MailList mailList={this.props.sendData} canEdit={false} state={this.state.filter}/>
                            :this.state.filter == 'trash'?
                            <MailList mailList={this.props.trashData} canEdit={false} state={this.state.filter}/>
                            :<MailList mailList={this.props.mailData} setScrollFn={this.setScrollFn.bind(this)} state={this.state.filter}/>
                        }
                    </div>
                    <ComposeBtn/>
                    { this.state.showNav?<div className="mask" onClick={this.hideNav.bind(this)}></div>: ''}
                </div>
                <Sider hideNav={this.hideNav.bind(this)} setPageState={this.setPageState.bind(this)}/>
            </div>
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
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)