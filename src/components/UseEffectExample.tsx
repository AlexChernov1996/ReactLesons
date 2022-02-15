import React, {useEffect, useState} from 'react';
// @ts-ignore
import {AnalogClock} from 'react-clock-analog';
import 'react-clock-analog/dist/index.css';
import "./UseMemo/clock.css"


const getStringForClock = (num: number) => num < 10
    ? '0' + num
    : num
export const Clock = () => {
    const [date, setDate] = useState(new Date())
    const [isClockAnalog, setIsClockAnalog] = useState(false)
    useEffect(() => {
        const clockInterval = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(clockInterval)
    }, [])
        const secondsStyle = {
            transform: `rotate(${date.getSeconds() * 6}deg)`
        };
        const minutesStyle = {
            transform: `rotate(${date.getMinutes() * 6}deg)`
        };
        const hoursStyle = {
            transform: `rotate(${date.getHours() * 30}deg)`
        };
    return (
        <div className='timer-container'>
            {isClockAnalog
                ? <div><span>{getStringForClock(date.getHours())}</span>:
                    <span>{getStringForClock(date.getMinutes())}</span>:
                    <span>{getStringForClock(date.getSeconds())}</span></div>
                :       <div className={"clock"}>
                    <h3>Clock</h3>
                    <div className={"analog-clock"}>
                        <div className={"dial seconds"} style={secondsStyle}/>
                        <div className={"dial minutes"} style={minutesStyle}/>
                        <div className={"dial hours"} style={hoursStyle}/>
                    </div>
                    <div className={"digital-clock"}></div>
                </div>
            }
            <button onClick={()=> setIsClockAnalog(!isClockAnalog)}>Change</button>

        </div>
    );
}
;

