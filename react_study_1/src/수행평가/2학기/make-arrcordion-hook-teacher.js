import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'

/*
function SingleAccordion() {
    const [state, setState] = useState({
        title: '제목',
        content: '내용',
        expanded: false
    })

    return <div>
        <div onClick={() => { setState(state => ({ ...state,expanded : !state.expanded })) }}>{state.title}</div>
        {
            state.expanded ? <div>{state.content}</div> : null
        }
    </div>
}

ReactDOM.render(<SingleAccordion />, document.getElementById("root"))
*/

const Search = (props) => {
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <input type="text" value={keyword} onChange={(e) => {
                setKeyword(e.target.value);
            }} />
            <button onClick={() => props.handleSubmit(keyword)}>{props.label}</button>
        </div>
    )
}

const WikiSearchApp = (props) => {
    const [searchData, setSearchData] = useState(null)
    const handleSubmit = (keyword) => {
        // alert(keyword);
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${keyword}`)
            .then(res => res.json())
            .then(data => {
                setSearchData(data);
            })
    }
    let content = <h1>no search result</h1>
    if(searchData !== null) {
        content = (
            <div>
                <ul>
                    {searchData[1].map( (title, idx) => (
                        <li>
                            <a href={searchData[3][idx]}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    return (
        <div>
            <Search handleSubmit={handleSubmit} label="찾기" />
            {content}
        </div>
    )
}

ReactDOM.render(<WikiSearchApp />, document.getElementById("root"))