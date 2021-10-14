import React from 'react'
import Slider from './Slider'


const Seeker = ({time, handleManualSeek,currentSong}) => {
    const rangeChangeHandler = (e) => {
        handleManualSeek(e.target.value)
    }
    return (
        <div className='seeker'>
            <p className="current-time">{time.currentTime}</p>
            <Slider rangeChangeHandler={rangeChangeHandler} time={time} currentSong={currentSong}/>
            <p className="total-time">{time.totalTime}</p>
        </div>
    )
}

export default Seeker