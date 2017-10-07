import React from 'react'
import MailItem from './MailItem'
import LoadMore from '../../components/LoadMore'
import { getMailData } from '../../fetch'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mailActionCreator from '../../actions/mailAction'

import './list.scss'

class MailList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasMore:true,
            loadingMore:false
        }
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
                    loadingMore: false
                });
                this.props.mailAction.initMailData(data)
            }
        }).catch(ex => {
            console.log('error')
        })
    }

    render(){
        return(
            <div className="mail-list">
                {
                    this.props.mailList.length > 0?
                    this.props.mailList.map(function(item,index){
                        return <MailItem key={index} item={item} canEdit={this.props.canEdit} state={this.props.state.slice(1)}/>
                    }.bind(this))
                    :<div className="empty"><span>you don't have any email yet</span></div>
                }
                {
                    this.state.hasMore && this.props.setScrollFn?
                    <LoadMore loadingMore={this.state.loadingMore} loadMoreFn={this.loadMoreData.bind(this)} setScrollFn={this.props.setScrollFn}/>:''
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
    }
}

function mapDispatchToProps(dispatch){
    return{
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MailList)