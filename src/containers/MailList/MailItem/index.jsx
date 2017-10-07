import React from 'react'
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mailActionCreator from '../../../actions/mailAction'
import './item.scss'

class MailItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isStart: false,
            toBound: false,
            start_x: null,
            x: null
        }
    }

    componentDidMount(){
        const id = this.props.item.id;
        let data = this.props.mailData.filter(function(el){
            return el.id == id;
        })
        this.setState({
            isLike: data[0].isLike
        })
    } 

    onStart(e){
        this.setState({
            isStart: true,
            start_x: e.touches[0].pageX,
            x: e.touches[0].pageX
        })
       
    }

    onMove(e){
        if(this.state.isStart){
            this.setState({
                x: e.changedTouches[0].pageX
            })
            let dist = this.state.start_x - this.state.x;
            
            if(this.state.x < 0 || this.state.x > window.innerWidth){
                this.onEnd(e);
            }

            if(dist < 0){
                this.setState({
                    toBound: false
                });
                this.onEnd(e);
            }

            if(dist < this.props.DRAG_DIST ){ 
                if(this.state.toBound) return; 
                e.currentTarget.style.transform = `translateX(-${Math.abs(dist)}px)`;
            }else{
                this.setState({
                    toBound: true
                })
            }
        }
        //e.preventDefault();
    }

    onEnd(e){
        if(this.state.start_x - this.state.x > this.props.DRAG_DIST || this.state.toBound){
            e.currentTarget.style.transform = `translateX(-${this.props.DRAG_DIST}px)`;
        }else{
            e.currentTarget.style.transform = 'translateX(0)';
        }
        this.setState({
            isStart: false,
            start_x: null,
            x: null
        })       
    }

    addLike(e){
        const id = this.props.item.id;
        this.props.mailAction.update(id);
        this.setState({
            isLike: !this.state.isLike
        })
        e.preventDefault();
    }

    delete(e){
        const item = {
            id: 1 + this.props.trashData.length,
            address: this.props.item.address,
            title: this.props.item.title,
            author: this.props.item.author,
            time: this.props.item.time,
            imgUrl: this.props.item.imgUrl,
            content: this.props.item.content,
            isLike: false
        }
        this.props.mailAction.remove(this.props.item);
        this.props.mailAction.addTrash(item);
        this.props.asset("delete succeed",false)
        e.preventDefault();
    }

    render(){
        return(
            <Link to={{ pathname:`/content/${this.props.item.id}`,state:this.props.state }}>
                {
                this.props.canEdit === false?
                <div className="item-wrap">
                    <div className="list-item">
                    <div>
                        <h3>
                            {this.props.item.author}
                        </h3>
                        <span className="time">{this.props.item.time}</span>
                    </div>
                    <h6>{this.props.item.title}</h6>
                    <p>{this.props.item.content}</p>                       
                    </div>
                </div>
                :<div className="item-wrap">
                    <div className="list-item" onTouchStart={this.onStart.bind(this)} 
                    onTouchMove={this.onMove.bind(this)}
                    onTouchEnd={this.onEnd.bind(this)}
                    onTouchCancel={this.onEnd.bind(this)}>
                        <div>
                            <span className="status"></span>
                            <h3>
                                {this.props.item.author}
                            </h3>
                            <span className="time">{this.props.item.time}</span>
                        </div>
                        <h6>{this.props.item.title}</h6>
                        <p>{this.props.item.content}</p>
                    </div>
                    <div className="icon star" onClick={this.addLike.bind(this)}><i className={`material-icons ${this.state.isLike?'i-like':'i-unlike'}`}></i></div>
                    <div className="icon delete" onClick={this.delete.bind(this)}><i className="material-icons i-delete"></i></div>
                </div>
                }
            </Link>
        )
    }
}

MailItem.defaultProps = {
    DRAG_DIST: 200
}

function mapStateToProps(state){
    return{
        mailData: state.mailData,
        trashData: state.trashData
    }
}

function mapDispatchToProps(dispatch){
    return{
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MailItem)