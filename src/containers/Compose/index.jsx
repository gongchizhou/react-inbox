import React from 'react'
import Header from '../../components/Header'
import BackBtn from '../../components/Header/Back'
import Notify from '../../components/Notify'
import UserList from '../UserList'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as sendActionCreator from '../../actions/mailAction'

import './style.scss'

class Compose extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            address:'',
            targetValue: '',
            subjectValue: '',
            contentValue: '',
            showList: false,
            isBtnLoading: false,
            showNotify: false,
            showFail: false,
            msg: ''
        }
    }

    componentDidMount(){
        const addParams = this.props.match.params.address;
        if(addParams !== null && addParams !== undefined){
            const address = addParams.replace('$','.');
            this.setState({
                targetValue: address
            })
        }
    }

    targetHandleChange(e){
        this.setState({
            targetValue: e.target.value
        })
    }

    subjectHandleChange(e){
        this.setState({
            subjectValue: e.target.value
        })
    }

    contentHandleChange(e){
        this.setState({
            contentValue: e.target.value
        })
    }

    sendMail(){
        if(!this.validateMail()){
            this.asset("wrong mail format",true)
            return;
        }
        if(!this.validateSubject()){
            this.asset("subject can not be empty",true)
            return;
        }
        if(!this.validateContent()){
            this.asset("content can not be empty",true)
            return;
        }
        this.setState({
            isBtnLoading: true
        })
        const time = this.getNowTime();
        const item = {
            id: 1 + this.props.sendData.length,
            address: this.state.targetValue,
            title: this.state.subjectValue,
            author: "me",
            time: time,
            isLike: false,
            imgUrl: "https://unsplash.it/200/300/?random",
            content: this.state.contentValue
        }
        
        setTimeout(function(){
            this.props.sendAction.addSend(item);
            this.setState({
                isBtnLoading: false
            })
            this.asset("sent succeed",false)
        }.bind(this),800)
    }

    validateMail(){
        let value = this.state.targetValue;
        const reg = /^\w+@\w+\.\w+/;
        return reg.test(value);
    }

    validateSubject(){
        return this.state.subjectValue;
    }

    validateContent(){
        return this.state.contentValue;
    }

    setAddress(address){
        this.setState({
            targetValue: address,
            showList: !this.state.showList
        })
    }

    toggleUserList(){
        this.setState({
            showList: !this.state.showList
        })
    }

    getNowTime(){
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth()+1;
            month = month<10 ? '0'+month : month;
        let day = date.getDate();
            day = day<10 ? '0'+day : day;
        let hour =date.getHours();
            hour = hour<10 ? '0'+hour : hour;
        let minute = date.getMinutes();
            minute = minute<10 ? '0'+minute : minute;
        return `${year}-${month}-${day} ${hour}:${minute}`
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
            <div className="compose-wrap">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    {
                        this.state.isBtnLoading?<div className="header-right send-loading"></div>:
                        <div className="header-right" onClick={this.sendMail.bind(this)}>send</div>
                    }
                </div>
                <div className="form-area">
                    <Notify showNotify={this.state.showNotify} showFail={this.state.showFail} msg={this.state.msg}/>
                    <div className="target">
                        <input type="text" placeholder="To" autoFocus value={this.state.targetValue} onChange={this.targetHandleChange.bind(this)}/>
                        <i className={`material-icons i-add ${this.state.showList?'rotate':''}`} onClick={this.toggleUserList.bind(this)}></i>
                    </div>
                    <div className={this.state.showList?'sliddown':'slidup'}><UserList readOnly='readOnly' setAddress={this.setAddress.bind(this)}/></div>
                    <div>
                        <div className="subject">
                            <input type="text" placeholder="Subject" onChange={this.subjectHandleChange.bind(this)}/>
                        </div>
                        <div>
                            <textarea type="text" placeholder="Content" onChange={this.contentHandleChange.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        sendData: state.sendData
    }
}

function mapDispatchToProps(dispatch){
    return{
        sendAction: bindActionCreators(sendActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Compose)