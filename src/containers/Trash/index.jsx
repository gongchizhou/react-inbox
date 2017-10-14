import React from 'react'
import {connect} from 'react-redux'
import MailList from '../MailList'
import HomeHeader from '../../components/HomeHeader'
import Sider from '../../components/Sider'
import ComposeBtn from '../../components/ComposeBtn'

class Trash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showNav:false
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

    render(){
        return(
            <div id="home" className="wrap">
                <div id="main-wrap" className={this.state.showNav?'open':''}>
                    <div className="scroll-wrap">
                        <HomeHeader showNav={this.showNav.bind(this)}/>
                            <MailList mailList={this.props.trashData} canEdit={false} state={this.props.match.path}/>
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
        trashData: state.trashData
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Trash)