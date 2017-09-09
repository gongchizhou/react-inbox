import React from 'react'
import './style.scss'

class TabBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="tab-bar">
                 {this.props.children}   
            </div>
        )
    }
}

export default TabBar