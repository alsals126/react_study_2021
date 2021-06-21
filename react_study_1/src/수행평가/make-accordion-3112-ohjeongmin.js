import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// onclick하면 div생성과 삭제
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
                <button style={ {border: '2px solid black', backgroundColor: 'lightgray', margin: '20px', padding: '20px'}}
                     onClick={ () => {
                         this.state.expanded ? this.setState({expanded : false}) : this.setState({expanded : true})
                     }}
                >제목</button>
                <span
                    style={ this.state.expanded ? {
                        border: '2px solid black', backgroundColor: 'lightgray', margin: '20px', padding: '20px'} : null}
                >
                    { this.state.expanded ?  this.state.content  : ''}
                </span>
            </div>
        )
    }
}
ReactDOM.render(<SingleAccordion />, document.getElementById("root"))