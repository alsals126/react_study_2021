import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class ForceUpdateDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { intervalId: null }
    }
    componentDidMount() {
        this.state.intervalId = setInterval(() => {
            // forceUpdate 메소드 호출하여 강제로 render 호출
            console.log("forceUpdate")
            /*그려질게 없는데, forceUpdate를 통해 강제로 render가 호출되고 있다.*/
            this.forceUpdate();
        }, 1000)
    }
    componentWillUnmount() {
        clearTimeout(this.state.intervalId)
    }
    render() {
        console.log("render")
        return <div>{ (new Date()).toISOString() }</div>
    }
}
ReactDOM.render(<ForceUpdateDemo />, document.getElementById('root'))
