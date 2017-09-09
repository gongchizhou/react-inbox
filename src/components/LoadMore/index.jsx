import React from 'react'
import './style.scss'

class LoadMore extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let timeoutId;
        const el = this.loadMoreEl;

        const loadMoreFn = this.props.loadMoreFn;
        const callback = function(){
            const top = el.getBoundingClientRect().top;
            
            if(top && top < window.screen.height){
                loadMoreFn();
            }
        }

        const loadingMore = this.props.loadingMore;
        const scrollFn = function(){
            if(loadingMore){
                return;
            }
            
            timeoutId && clearTimeout(timeoutId);
            timeoutId = setTimeout(callback,50);
        };

        this.props.setScrollFn(scrollFn);
    }

    render(){
        return(
            <div className="loadmore" ref={(el) => {this.loadMoreEl = el}}>
                {
                    this.props.loadingMore?<span className="loading-ani"></span>:
                    <span>pull down to load more</span>
                }
            </div>
        )
    }
}


export default LoadMore