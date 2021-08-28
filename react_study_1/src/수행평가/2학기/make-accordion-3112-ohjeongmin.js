import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Accordion() {
    const items = [
        {title: '제목 1', content: '내용 1'},
        {title: '제목 2', content: '내용 2'},
        {title: '제목 3', content: '내용 3'},
    ]
    const [idx, setIdx] = React.useState(-1)

    return (
        <div>
            {
                items.map((item, id) => {
                    return (
                        <div>
                            <div onClick={() => {
                                if (idx == id) {
                                    setIdx(-1)
                                } else {
                                    setIdx(id)
                                }
                            }}>{item.title}</div>
                            {
                                (idx == id) ?
                                    <div>{item.content}</div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(<Accordion />, document.getElementById("root"))