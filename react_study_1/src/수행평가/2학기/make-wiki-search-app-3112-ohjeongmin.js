import React, { useState, useEffect, useCallback } from "react"
import ReactDOM from "react-dom"
const Search = (props) => {
    const [keyword, setKeyword] = useState('')
    return (
        <div>
            <input/>
            <button>{props.label == null ? "검색" : props.label} </button>
        </div>
    )
}
const WikiSearchApp = (props) => {
    const [searchData, setSearchData] = useState(null)
    const handleSubmit = (keyword) => {
// ...
    }
    let content = <h1>no search result</h1>
    if(searchData !== null) {
        content = (
            <div>
                {/* 내용 구현 */}
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