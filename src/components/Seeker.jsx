import React from 'react'


const Seeker = ({time, handleManualSeek}) => {
    const rangeChangeHandler = (e) => {
        handleManualSeek(e.target.value)
    }
    return (
        <div className='seeker'>
            <p className="current-time">{time.currentTime}</p>
            <input type='range' onChange={rangeChangeHandler} min='0'
                value={time.rawCurrentTime} max={time.rawTotalTime}></input>
            <p className="total-time">{time.totalTime}</p>
        </div>
    )
}

export default Seeker