import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faPlay,faPause, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Controls = ({isPlaying,handlePlay}) => {

    return (
        <div className='controls'>
            <FontAwesomeIcon icon={faChevronLeft} className='controls-left' />
            <FontAwesomeIcon icon={isPlaying? faPause : faPlay} onClick={handlePlay} className='controls-play' />
            <FontAwesomeIcon icon={ faChevronRight} className='controls-right' />
        </div>
    )
}



export default Controls
