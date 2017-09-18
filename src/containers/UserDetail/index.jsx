import React from 'react'
import Header from '../../components/Header/index.jsx'
import BackBtn from '../../components/Header/Back/index.jsx'
import { getUserDetail } from '../../fetch/index.jsx'
import { Link } from 'react-router-dom'

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
            phoneValue: ''
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const res = getUserDetail(id);
        res.then(res => {
            return res.json()
        }).then(json => {
            let data = json.item;
            data = data.filter(function(el){
                return el.id == id;
            })
            this.setState({
                detailItem: data[0]
            })
        })
    }
    
    editClick(){
        this.setState({
            isEdit: true
        })
    }

    doneClick(){
        this.setState({
            isEdit: false
        })
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
            mailValue: e.target.value
        })
    }

    phoneHandleChange(e){
        this.setState({
            mailValue: e.target.value
        })
    }

    render(){
        return(
            <div id="userDetail">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    <div className={`header-right ${this.state.isEdit?'hide':'show'}`} onClick={this.editClick.bind(this)}>Edit</div>
                    <div className={`header-right ${this.state.isEdit?'show':'hide'}`} onClick={this.doneClick.bind(this)}>Done</div>
                </div>
                <div className="content-hd">
                        <div className="avatar">
                            <img src={ this.state.detailItem.imgUrl }/>
                        </div>
                        <div className={`name ${this.state.isEdit?'hide':'show'}`}>{ this.state.detailItem.name }</div>
                        <input className={this.state.isEdit?'show':'hide'} type="text" defaultValue={this.state.detailItem.name} onChange={this.nameHandleChange.bind(this)} placeholder="name"/>
                        <Link to={`/compose/${this.state.detailItem.email}`} className={`sendMail ${this.state.isEdit?'hide':'show'}`}>Send Mail</Link>
                    </div>
                <div className="content-bd">
                    <p className="email">
                        <i className="material-icons i-mail"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.email }</span>
                        <input className={this.state.isEdit?'show':'hide'} type="text" defaultValue={this.state.detailItem.email} onChange={this.mailHandleChange.bind(this)} placeholder="email"/>
                    </p>
                    <p className="mobile">
                        <i className="material-icons i-mobile"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.mobile }</span>
                        <input className={this.state.isEdit?'show':'hide'} type="text" defaultValue={this.state.detailItem.mobile} onChange={this.mobileHandleChange.bind(this)} placeholder="mobile"/>
                    </p>
                    <p className="phone">
                        <i className="material-icons i-phone"></i>
                        <span className={this.state.isEdit?'hide':'show'}>{ this.state.detailItem.tel }</span>
                        <input className={this.state.isEdit?'show':'hide'} type="text" defaultValue={this.state.detailItem.phone} onChange={this.phoneHandleChange.bind(this)} placeholder="phone"/>
                    </p>
                </div>
                <div className="content-ft">
                    <a className="delete">Delete</a>
                </div>
            </div>
        )
    }
}

export default UserDetail