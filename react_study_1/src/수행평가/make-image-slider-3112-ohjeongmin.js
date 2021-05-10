import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {
    constructor(props) {
        super(props)

        // 기능 구현에 필요한 값을 state에 추가 가능
        this.state = {
            images: [
                'https://via.placeholder.com/100x100?text=Image+1',
                'https://via.placeholder.com/100x100?text=Image+2',
                'https://via.placeholder.com/100x100?text=Image+3',
                'https://via.placeholder.com/100x100?text=Image+4'
            ],
            currentIdx: 0
        }
    }

    handlePrev = () => {
        this.setState(s => {
            return { currentIdx: s.currentIdx -1}
        })
    }

    handleNext = () => {
        this.setState(s => {
            return { currentIdx: s.currentIdx +1}
        })
    }

    render() {
        return (
            <div>
                {/* 코드 작성 */}
                <img src ={this.state.images[this.state.currentIdx]}/><br/>
                {
                    (this.state.currentIdx > 0) ? <button onClick={this.handlePrev}>prev</button> : null
                }
                {
                    (this.state.currentIdx < this.state.images.length -1) ? <button onClick={this.handleNext}>next</button> : null
                }
            </div>
        )
    }
}

ReactDOM.render(<ImageSlider />, document.getElementById("root"))