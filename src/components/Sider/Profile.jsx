import React from 'react'

class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="user">
                <div className="avatar"></div>
                <div className="bio">
                    <h5>gchizhou</h5>
                    <p>gchizhou@zimail.com</p>
                </div>
            </div>
        )
    }
}


export default Profile