import React from 'react'
import MailItem from './MailItem.jsx'
import LoadMore from '../LoadMore/index.jsx'
import { getMailData } from '../../fetch/index.jsx'
import './list.scss'

class MailList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasMore:false,
            loadingMore:false,
            mail:[]
        }
    }

    componentDidMount(){
        this.loadMoreData();
    }

    loadMoreData(){
        this.setState({
            loadingMore: true
        });
        const res = getMailData();
        res.then(res => {
            return res.json()
        }).then(json => {
            const data = json.item;
            const hasMore = json.hasMore;
            if(data.length){
                this.setState({
                    hasMore: hasMore,
                    loadingMore: false,
                    mail: this.state.mail.concat(data)
                });
                
            }
        }).catch(ex => {
            console.log('error')
        })
    }

    render(){
        return(
            <div className="mail-list">
                {
                    this.state.mail.map(function(item,index){
                        return <MailItem key={index} item={item}/>
                    })
                }
                {
                    this.state.hasMore?<LoadMore loadingMore={this.state.loadingMore} loadMoreFn={this.loadMoreData.bind(this)} setScrollFn={this.props.setScrollFn}/>:''
                }
            </div>
        )
    }
}


export default MailList