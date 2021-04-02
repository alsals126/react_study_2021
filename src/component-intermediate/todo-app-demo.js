import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends Component {
    render() {
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

    handleChange = (e) => { //화살표 함수를 쓰는게 유지보수할 때 좋다
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} value={this.state.input} />
                <button onClick={() => {
                    this.props.handleTodoAdd({ completed: false, text: this.state.input })
                    this.setState({ input: '' }) // 빈 입력창
                }}>Add</button>
            </div>
        )
    }
}

class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { completed: false, text: '리액트 공부하기' },
                { completed: true, text: 'ES6 문법 공부하기' },
            ]
        }
    }

    handleTodoAdd = (newTodo) => {
        this.setState((state) => ({
            todos: state.todos.concat(newTodo)
        }))
    }

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

    // 언더바는 관심이 없는걸 표현
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