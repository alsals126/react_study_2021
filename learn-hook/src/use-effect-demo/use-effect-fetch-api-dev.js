import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'

const Search = ({lable, handleSearch}) => {
    const [keyword, setKeyword] = useState('')
    const ref = useRef()

    return(
        <div>
            <input
                type="text"
                value={keyword}
                onChange={(e) => {
                    setKeyword(e.target.value)
                }}
            />
            <button onClick={() => {
                const k = keyword.trim()
                if(k.length === 0) {
                    alert('검색어를 정확히 입력해주세요')
                }else {
                    handleSearch(k)
                }
            }}>{lable ?? "검색"}</button>
        </div>
    )
}

const NewsList = ({articles}) => {
    return(
        <ul>
            {
                articles.map((article, idx) => {
                    return (<li key={idx}>
                        <NewsItem article={article} />
                    </li>)
                })
            }
        </ul>
    )
}

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article
    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const NewsApp = (props) => {
    const [query, setQuery] = useState(null)
    const [articles, setArticles] = useState([])
    const apiKey = '8769a3cc8a9c47b2b599026fd9606f88'

    useEffect(() => {
        if(query){
            fetch(`http://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}`)
                .then(res => res.json())
                .then(data => {
                    setArticles(data.articles)
                })
        }
    }, [query])

    /*
         <h1>{query}</h1>
         <pre>
            {JSON.stringify(articles, null, 2)}
         </pre>
    */
    return (
        <div>
            <Search lable='찾기' handleSearch={setQuery} />
            <NewsList article = {articles} />
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))