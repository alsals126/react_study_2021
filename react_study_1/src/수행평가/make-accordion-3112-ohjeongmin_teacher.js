import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SingleAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '제목',
            content: '내용',
            expanded: false
        }
    }
    render() {
        return(
            <div>
                <div onClick={()=>{
                    this.setState(state => {
                        return {expanded : !state.expanded}
                    })
                }}>{this.state.title}</div>
                {
                    this.state.expanded ?
                        <div>{this.state.content}</div>
                        : null
                }
            </div>
        )
    }
}

class Accordion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idx : null
        }
    }

    handleIdxChange= (idx) => {
        this.setState({idx})
    }

    render() {
        return(
            <div>
                {
                    this.props.items.map((item, idx) => {
                        return (
                            <div>
                                <div onClick={() => {
                                    if(this.state.idx === idx){
                                        this.setState({idx:null})
                                    }else{
                                        this.handleIdxChange(idx)
                                    }
                                }}>{item.title}</div>
                                {
                                    (this.state.idx === idx) ?
                                        <div>{item.content}</div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const items = [
    { title: '제목 1', content: '내용 1' },
    { title: '제목 2', content: '내용 2' },
    { title: '제목 3', content: '내용 3' },
]

ReactDOM.render(<Accordion items={items} />, document.getElementById("root"))
//ReactDOM.render(<SingleAccordion />, document.getElementById("root"))