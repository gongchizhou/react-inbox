import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
    }

    changeHandle(e){
        this.props.onChange(e);
    }

    render(){
        return(
            <input type="text"className={this.props.isEdit?'show':'hide'} defaultValue={this.props.default} placeholder={this.props.placeholder} onChange={this.changeHandle.bind(this)}/>
        )
    }
}


export default Input