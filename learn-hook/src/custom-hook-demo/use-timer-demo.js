import React, { useState, useCallback } from 'react'
import ReactDOM from "react-dom"

function useTimer(initialTime = 10) {
    const [time, setTime] = useState(initialTime)
    const id = useRef(null)

    let resume = () => (
        id.current = setInterval(() => {
            setTime(time => time -1)
        }, 1000)
    )

    let pause = () => {
        clearInterval(id.current)
    }

    if(time === 0){
        pause()
        // 함수 안에 아무것도 없게 만들기
        // 더 이상 호출 못하도록
        resume() = () => {}
        pause() = () => {}
    }
}

let resum =

const { time, resume, pause } = useTimer(5, () => {
    console.log('timeout')
})

function AppUsingTimer1() {
    const { time, resume, pause } = useTimer(5)

    return (
        <div>
            <p>time : {time}</p>
            {time === 0 ? null :
                <>
                    <button onClick={resume}>resume</button><br />
                    <button onClick={pause}>pause</button>
                </>
            }
        </div>
    )
}

function AppUsingTimer2() {
    const initTime = 5
    const { time } = useTimer(initTime)
    const style = { background: 'red', height: '50px', width: `${(time/initTime) * 100}%`}
    return <div style={style}></div>
}