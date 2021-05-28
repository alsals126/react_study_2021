import { Component } from 'react'

class NewsItem extends Component {
    render() {
        const { title, description, url, urlToImage } = this.props.article

        return (
            <div>
                <h1><a href={url} target='_blank'>{title}</a></h1>
                <img style={{ height: '100px' }} src={urlToImage} />
                <p>{description}</p>
            </div>
        )
    }
}

export default NewsItem