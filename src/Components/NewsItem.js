import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,Description,imgurl,newsurl,author,date} = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={imgurl} className="card-img-top" alt="..." width="700" height="200" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{Description}...</p>
                        <p class="card-text text-danger">{author?author:"Unknown"} {new Date(date).toGMTString()}</p>
                        <a href={newsurl} target="blank" className="btn btn-info">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
