import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const LoginUserContext = createContext(null)

const UserButton = () => {
    const { loginUser, setLoginUser } = useContext(LoginUserContext)
    const { fetching, setFetching } = useState(false)
    const { error, setError} = useState(null) //에러처리 해주기

    const handleLogin = () => {
        //alert('handle login')
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login

                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
            })

    }

    const handleLogout = () => {
        setLoginUser(null)
    }

    if(fetching){
        return (<div>fetching..</div>)
    }

    if(error){
        return (<div></div>)
    }

    return(
        <div>
            {
                loginUser === null ?
                <button onClick={handleLogin}>Login</button> :
                <div>
                    <button onClick={handleLogout}>Logout</button>
                    <img src
                </div>
            }
        </div>
    )
}

function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            {
                loginUser === null ?
                    <div>
                        <h2>"방문자"님 환영합니다.</h2>
                        <LoginButton />
                    </div>
                    :
                    <div>
                        <h2>"{loginUser.username}"님 환영합니다.</h2>
                        <UserInfo />
                        <LogoutButton />
                    </div>
            }
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));