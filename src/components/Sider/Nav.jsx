import React from 'react'

class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul className="nav">
                <li>Inbox</li>
                <li>Sent</li>
                <li>Stared</li>
                <li>Trash</li>
            </ul>
        )
    }
}


export default Nav