import React from 'react'
import {connect} from 'react-redux'
import MailList from '../../components/MailList/MailList.jsx'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import Sider from '../../components/Sider/index.jsx'
import ComposeBtn from '../../components/ComposeBtn/index.jsx'

import './style.scss'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showNav:false,
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
                            this.props.match.path === '/liked'?
                            <MailList mailList={this.props.mailData.filter((item) =>  item.isLike === true )}/>
                            :<MailList mailList={this.props.mailData} setScrollFn={this.setScrollFn.bind(this)}/>  
                        }
                    </div>
                    <ComposeBtn/>
                    { this.state.showNav?<div className="mask" onClick={this.hideNav.bind(this)}></div>: ''}
                </div>
                <Sider hideNav={this.hideNav.bind(this)}/>
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
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)