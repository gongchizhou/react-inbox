import React from 'react'
import {Link} from 'react-router-dom'
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

    render(){
        return(
            <Link to={`/content/${this.props.item.id}`}>
                <div className="item-wrap">
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
                    <div className="icon star"><i className="material-icons i-unlike"></i></div>
                    <div className="icon delete"><i className="material-icons i-delete"></i></div>
                </div>
            </Link>
        )
    }
}

MailItem.defaultProps = {
    DRAG_DIST: 200
}


export default MailItem