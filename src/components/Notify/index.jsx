import React from 'react'
import './style.scss'

class Notify extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={`${this.props.showNotify?'fadeIn':'fadeOut'} notify ${this.props.showFail?'fail':'success'}`}>
                {this.props.msg}
            </div>
        )
    }
}

export default Notify