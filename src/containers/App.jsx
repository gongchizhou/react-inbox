import React from 'react'
import { getUserData } from '../fetch'
import { getMailData } from '../fetch'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mailActionCreator from '../actions/mailAction'
import * as userActionCreator from '../actions/userAction'
import AppRouter from '../router/router'
import Transition from 'react-transition-group/Transition';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        const mailDRes = getMailData();
        mailDRes.then((res) => {
            return res.json();
        }).then((json) => {
            if(this.props.mailData && this.props.mailData.length>0){
                return
            }else{
                this.props.mailAction.initMailData(json.item);
            }
            this.getUserRes();
        }).catch((ex) => {
            console.log(ex)
        })
    }

    getUserRes(){
        const userRes = getUserData();
        userRes.then((res) => {
            return res.json();
        }).then((json) => {
            if(this.props.userData && this.props.userData.length>0){
                return
            }else{
                this.props.userAction.initUserData(json.item);
            }
            this.setState({
                isLoading: false
            })
        }).catch((ex) => {
            console.log(ex)
        })
    }

    render(){
        return(
            <div>
               {   this.state.isLoading
                   ?<div className="empty"><span className="loading-ani"></span></div>
                   :<AppRouter/>
                   }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        mailData: state.mailData,
        userData: state.userData
    }
}

function mapDispatchToProps(dispatch){
    return{
        userAction: bindActionCreators(userActionCreator,dispatch),
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)