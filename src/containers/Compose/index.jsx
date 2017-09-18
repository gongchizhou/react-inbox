import React from 'react'
import Header from '../../components/Header/index.jsx'
import BackBtn from '../../components/Header/Back/index.jsx'

import './style.scss'

class Compose extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            address:'',
            targetValue: '',
            subjectValue: '',
            contentValue: ''
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
            console.log("error mail")
            return;
        }
        if(!this.validateSubject()){
            console.log("Sempty")
            return;
        }
        if(!this.validateContent()){
            console.log("Cempty")
            return;
        }
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

    render(){
        return(
            <div className="compose-wrap">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    <div className="header-right" onClick={this.sendMail.bind(this)}>send</div>
                </div>
                <div className="form-area">
                    <div className="target">
                        <input type="text" placeholder="To" defaultValue={this.props.match.params.address} autoFocus onChange={this.targetHandleChange.bind(this)}/>
                        <i className="material-icons i-add"></i>
                    </div>
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

export default Compose