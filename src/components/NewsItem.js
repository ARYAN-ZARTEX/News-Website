import React from 'react'

const NewsItem=(props)=>{
    let {title, description, imageUrl, newsUrl, date, source} = props;
    return (
        <div className='my-3'>
            <div className="card">
            <span className="position-absolute translate-right badge rounded-pill bg-secondary" style={{right: '1%',top: '.8%', zIndex: '1'}}>
                            {source}
                        </span>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">Last Updated on {new Date(date).toDateString()}</small></p>
                        <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsItem
