import React from 'react'
import Header from '../../../components/Header'
import BackBtn from '../../../components/Header/Back'
import Notify from '../../../components/Notify'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreator from '../../../actions/userAction.jsx'


class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameValue: '',
            mailValue: '',
            mobileValue: '',
            phoneValue: '',
            showNotify: false,
            showFail: false,
            msg: ''
        }
    }

    

    doneClick(){
        if(!this.validateName()){
            this.asset('name must begin with a letter',true)
            return
        }

        if(!this.validateMail()){
            this.asset('wrong mail format',true)
            return
        }

        if(!this.validateNum()){
            this.asset('phone must be numbers',true)
            return
        }

        let name = this.state.nameValue,
            email = this.state.mailValue,
            mobile = this.state.mobileValue,
            tel = this.state.phoneValue;
        
        const user = {
            id: Math.random(),
            name: name,
            email: email,
            mobile: mobile,
            tel: tel,
            imgUrl: "https://unsplash.it/200/300/?random"
        }

        this.props.userAction.add(user);
        window.history.back();
       
    }

    nameHandleChange(e){
        this.setState({
            nameValue: e.target.value
        })
    }

    mailHandleChange(e){
        this.setState({
            mailValue: e.target.value
        })
    }

    mobileHandleChange(e){
        this.setState({
            mobileValue: e.target.value
        })
    }

    phoneHandleChange(e){
        this.setState({
            phoneValue: e.target.value
        })
    }

    validateMail(){
        let value = this.state.mailValue;
        const reg = /^\w+@\w+\.\w+/;
        return reg.test(value);
    }

    validateName(){
        let value = this.state.nameValue;
        const reg = /^[A-Za-z]+/;
        return reg.test(value);
    }

    validateNum(){
        let value1 = this.state.mobileValue;
        let value2 = this.state.phoneValue;
        const reg = /^[0-9]+/;
        return reg.test(value1) && reg.test(value2);
    }

    asset(msg,fail){
        this.setState({
            showNotify: true,
            msg: msg
        })

        if(fail){
            this.setState({
                showFail: true
            })
        }else{
            this.setState({
                showFail: false
            })          
        }

        setTimeout(function(){
            this.setState({
                showNotify: false
            })
        }.bind(this),800)
    }

    render(){
        return(
            <div id="userDetail">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    <div className="header-right" onClick={this.doneClick.bind(this)}>Done</div>
                </div>
                <div className="content-hd">
                    <Notify showNotify={this.state.showNotify} showFail={this.state.showFail} msg={this.state.msg}/>
                    <div className="avatar">
                        <img src="https://unsplash.it/200/300/?random"/>
                    </div>
                    <input type="text" onChange={this.nameHandleChange.bind(this)} placeholder="name"/>
                </div>
                <div className="content-bd">
                    <p className="email">
                        <i className="material-icons i-mail"></i>
                        <input type="text" onChange={this.mailHandleChange.bind(this)} placeholder="email"/>
                    </p>
                    <p className="mobile">
                        <i className="material-icons i-mobile"></i>
                        <input type="text" onChange={this.mobileHandleChange.bind(this)} placeholder="mobile"/>
                    </p>
                    <p className="phone">
                        <i className="material-icons i-phone"></i>
                        <input type="text" onChange={this.phoneHandleChange.bind(this)} placeholder="phone"/>
                    </p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userData: state.userData
    }
}

function mapDispatchToProps(dispatch){
    return{
        userAction: bindActionCreators(userActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddUser)