import React from 'react'
// import ColorThief from "colorthief";

const Slider = ({rangeChangeHandler, time, currentSong}) => {

    // custom slider update
    const animateTrackStyles = {
        transform : `translateX(${((time.rawCurrentTime / time.rawTotalTime) * 100)}%)`
    }

    const inputStyles = {
        // background : currentSong.color[0]
        background : `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
    }

    return (
        <div className='slider-container'>
            <div>
                <input type='range' style={inputStyles} onChange={rangeChangeHandler} min='0'
                    value={time.rawCurrentTime} max={time.rawTotalTime}></input>
                <div className="animate-track" style={animateTrackStyles}></div>
            </div>
        </div>
    )
}

export default Slider
