import React from 'react'
import Header from '../../components/Header'
import BackBtn from '../../components/Header/Back'
import Notify from '../../components/Notify'
import Input from './Input'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreator from '../../actions/userAction'

import './style.scss'

class UserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detailItem: {},
            isEdit: false,
            nameValue: '',
            mailValue: '',
            mobileValue: '',
            phoneValue: '',
            showNotify: false,
            showFail: false,
            msg: ''
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        let data = this.props.userData;
        data = data.filter(function(el){
            return el.id == id;
        })
        this.setState({
            detailItem: data[0],
            nameValue: data[0].name,
            mailValue: data[0].email,
            mobileValue: data[0].mobile,
            phoneValue: data[0].tel
        })
    }
    
    editClick(){
        this.setState({
            isEdit: true
        })
    }

    doneClick(){
        console.log(this.state.mailValue)
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
            id: Number(this.props.match.params.id),
            name: name,
            email: email,
            mobile: mobile,
            tel: tel,
            imgUrl: this.state.detailItem.imgUrl
        }

        this.props.userAction.update(user);

        this.asset('modify finished',false)
        this.setState({
            isEdit: false
        })

    }

    deleteClick(){
        const currentUser = this.state.detailItem;
        this.props.userAction.remove(currentUser);
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
            <div id="userDetail" className="wrap">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    <div className={`header-right ${this.state.isEdit?'hide':'show'}`} onClick={this.editClick.bind(this)}>Edit</div>
                    <div className={`header-right ${this.state.isEdit?'show':'hide'}`} onClick={this.doneClick.bind(this)}>Done</div>
                </div>
                <div className="content-hd">
                    <Notify showNotify={this.state.showNotify} showFail={this.state.showFail} msg={this.state.msg}/>
                    <div className="avatar">
                        <img src={ this.state.detailItem.imgUrl }/>
                    </div>
                    <div className={`name ${this.state.isEdit?'hide':'show'}`}>{ this.state.detailItem.name }</div>
                    <Input isEdit={this.state.isEdit} type="text" default={ this.state.detailItem.name } onChange={this.nameHandleChange.bind(this)} placeholder="name"/>
                    <Link to={`/compose/${this.state.detailItem.email.replace('.','$')}`} className={`sendMail ${this.state.isEdit?'hide':'show'}`}>Send Mail</Link>
                </div>
                <div className="content-bd">
                    <p className="email">
                        <i className="material-icons i-mail"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.email }</span>
                        <Input isEdit={this.state.isEdit} type="text" default={ this.state.detailItem.email } onChange={this.mailHandleChange.bind(this)} placeholder="email"/>
                    </p>
                    <p className="mobile">
                        <i className="material-icons i-mobile"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.mobile }</span>
                        <Input isEdit={this.state.isEdit} type="text" default={ this.state.detailItem.mobile } onChange={this.mobileHandleChange.bind(this)} placeholder="mobile"/>
                    </p>
                    <p className="phone">
                        <i className="material-icons i-phone"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.tel }</span>
                        <Input isEdit={this.state.isEdit} type="text" default={ this.state.detailItem.tel } onChange={this.phoneHandleChange.bind(this)} placeholder="phone"/>
                    </p>
                </div>
                <div className="content-ft">
                    <a className="delete" onClick={this.deleteClick.bind(this)}>Delete</a>
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


export default connect(mapStateToProps,mapDispatchToProps)(UserDetail)