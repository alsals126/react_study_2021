import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date: '',
            isForeigner: false,
            roomNumber: 'one'
        };
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // ES6에서 도입된 computed property names 문법 활용 (대괄호가 들어감)
        // https://eloquentcode.com/computed-property-names-in-javascript
        this.setState({
            // 태그의 name 속성값을 속성키로 사용
            // ex) name에 hello가 있으면 => hello: value로 바뀜
            [name]: value
        });
    }
    handleSubmit = (e) => {
        alert("submit!");
        // 필요한 네트워크 요청(ex: ajax) 보내기
        // (입력 요소와 상태가 동기화되어 있으므로, 필요한 내용은 전부 state 객체에서 참조 가능)
        e.preventDefault(); // 페이지 넘어가는 것을 막는다.
                            // 잘보면 주소값이 바뀐다. 그것을 막는다.
    }
    render() {
        return (
            <form>
                <p>{JSON.stringify(this.state)}</p> {/* 객체의 속성값을 보여줌 */}
                <hr />
                <label>이름 <input value={this.state.name} name="name" type="text" onChange={this.handleInputChange} /></label><br />
                <label>날짜 <input value={this.state.date} name="date" type="date" onChange={this.handleInputChange} /></label><br />
                <label>외국인 여부 <input checked={this.state.isForeigner} name="isForeigner" type="checkbox" onChange={this.handleInputChange} /></label><br />
                <select name="roomNumber" value={this.state.roomNumber} onChange={this.handleInputChange}>
                    <option value="one">1개</option>
                    <option value="two">2개</option>
                    <option value="three">3개</option>
                </select>
                <br />
                <input type="submit" value="제출" onClick={this.handleSubmit} />
            </form>
        );
    }
}

ReactDOM.render(<ReservationForm />, document.getElementById("root"))