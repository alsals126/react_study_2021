import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// onClick={() => this.props.handleTodoStatusToggle(this.props.idx)}는 handleTodoStatusToggle 메서드에다가 idx를 넘겨준다.
class TodoItem extends Component {
    render() {
        // this.props.todo는 배열의 값을 의미한다. { completed: false, text: '리액트 공부하기'}이런거.
        const { completed, text } = this.props.todo //비구조 할당

        return (
            <div>
                <div>
                    <span
                        style={completed ? { textDecoration: 'line-through' } : null}
                        onClick={() => this.props.handleTodoStatusToggle(this.props.idx)}>
                        {text}
                    </span>&nbsp;
                    <button onClick={() => this.props.handleTodoRemove(this.props.idx)}>X</button>
                </div>
            </div>
        )
    }
}

// ol : 정렬된 목록을 나타냄. 보통 숫자 목록으로 표현한다.
// li : 목록의 항목을 나타냄.
// this.props.todos.map((todo, idx) => { 는 JavaScript map()함수를 사용하여 todos 배열을 반복 실행합니다.
// todo는 배열을 의미한다.({ completed: false, text: '리액트 공부하기'} 이런거). idx는 아이템 인덱스를 의미한다.
// return을 하면 새로운 배열이 나옴.
// <li key={idx}> : key는 식별할 때 사용. idx(아이템 인덱스)를 key에 사용한다.
class TodoList extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, idx) => {
                        return (
                            <li key={idx}>
                                <TodoItem
                                    idx={idx}
                                    todo={todo}
                                    handleTodoStatusToggle={this.props.handleTodoStatusToggle}
                                    handleTodoRemove={this.props.handleTodoRemove}/>
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}

class TodoAdder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    // onChange 이벤트는 특히 input태그와 짝을 이루어 쓰이는데 인자로 "이벤트 객체"를 받는다.
    // e가 이벤트 객체
    // e.target.value는 input에 써져있는 값을 의미한다.
    //this.props.handleTodoAdd({ completed: false, text: this.state.input })는 handleTodoAdd에게
    // { completed: false, text: this.state.input }를 전달한다.
    handleChange = (e) => { //화살표 함수를 쓰는게 유지보수할 때 좋다
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                <button onClick={() => {
                    this.props.handleTodoAdd({ completed: false, text: this.state.input })
                    this.setState({ input: '' }) // 빈 입력창 (다시 빈 입력창으로 만든다)
                }}>Add</button>
            </div>
        )
    }
}

class TodoApp extends Component {
    constructor(props) {
        super(props)

        // 반드시 "생성자 함수 내부"에서 상태 초기화 진행
        // props와는 다르게 state는 변경 가능함을 유의 (단, setState 메소드를 이용하여 변경)
        this.state = {
            todos: [
                { completed: false, text: '리액트 공부하기' },
                { completed: true, text: 'ES6 문법 공부하기' },
            ]
        }
    }

    // 받은 newTodo를 todos에 합친다.
    // concat : 문자열 합치기
    handleTodoAdd = (newTodo) => {
        this.setState((state) => ({
            todos: state.todos.concat(newTodo)
        }))
    }

    // TodoItem 클래스에서 받아온 idx가 todoIndex이다.
    // todo는 completed, text 속성을 가지고 있는 객체
    // ...todo는 이전꺼 싹 다 가져옴
    // return을 하면 새로운 값이 나옴.
    handleTodoStatusToggle = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }))
    }

    // TodoItem 클래스에서 받아온 idx가 todoIndex이다.
    // (_, idx) => {
    //    return idx !== todoIndex
    // } 은 "function(_, idx) {return idx !== todoIndex}"를 의미한다.
    // 언더바는 관심이 없는걸 표현
    // !==은 값은 물론이고 타입까지 비교한다.
    // 아무것도 없는 것의 index를 구했기 때문에 idx는 todoIndex랑 같지 않을 것이다. 그래서 false가 리턴이 되는데, todos는 false 리턴되어 리스트에서 제외됨
    handleTodoRemove = (todoIndex) => {
        this.setState((state) => ({
            todos: state.todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        }))
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    handleTodoStatusToggle={this.handleTodoStatusToggle} //메서드
                    handleTodoRemove={this.handleTodoRemove}/>
                <TodoAdder handleTodoAdd={this.handleTodoAdd} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<TodoApp />, rootElement)
//ReactDOM.render(<TodoApp />, document.getElementById("root"))