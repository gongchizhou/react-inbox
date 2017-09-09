import React from 'react'
import './style.scss'

class BackBtn extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(){
        window.history.back();
    }

    render(){
        return(
            <div onClick={this.handleClick.bind(this)}>
                <i className="material-icons i-back"></i>
            </div>
        )
    }
}

export default BackBtn