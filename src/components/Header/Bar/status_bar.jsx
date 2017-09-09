import React from 'react'
import './bar.scss'

class Bar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="bar">
                <div className="status-bar">
                    <ul className="signal">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span className="network">5G</span>
                    <div className="icons">
                        <i className="airplane off"></i>
                        <i className="wifi"></i>
                        <i className="bluetooth"></i>
                    </div>
                    <div className="battery"><span className="percentage">100%</span><span className="charge"></span><i></i></div>
                </div>                
            </div>
        )
    }
}

export default Bar