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
            index: 0
        }
    }

    prevButton = (num) => {
        this.setState((state)=> ({
            index : state.index + num
        }))
    }

    render() {
        return (
            <div>
                {/* 코드 작성 */}
                {this.state.image.map((i, idx) => {
                    if(idx === this.state.index){
                        return <img src = {i}/>
                    }
                })}/>
                {this.state.index===0 ? '': <button onClick={this.prevButton(-1)}>prev</button>}&nbsp;
                <button>next</button><br />
            </div>
        );
    }
}

ReactDOM.render(<ImageSlider />, document.getElementById("root"))