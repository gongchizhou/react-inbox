import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

class ComposeBtn extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
            <Link to="/compose"><i id="compose" className="material-icons i-pen"></i></Link>
           
        )
    }
}

export default ComposeBtn