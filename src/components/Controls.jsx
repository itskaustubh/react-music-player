import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faPlay,faPause, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Controls = ({isPlaying,handlePlay,songs,setCurrentSong,audioRef,setIsPlaying,currentSong}) => {

    const handleControls= (direction) => {

        const currentSongIndex = songs.findIndex(song => song.id === currentSong.id)

        let nextSongIndex;
        if(direction === 'forward'){
            nextSongIndex = (currentSongIndex + 1) % (songs.length)
        }else{
            nextSongIndex = currentSongIndex === 0 ? songs.length - 1 : (currentSongIndex + -1) % (songs.length)
        }
        setCurrentSong(songs[nextSongIndex]).then(() => {
            console.log('done')
            if(isPlaying){
                audioRef.current.play()
                setIsPlaying(true)
            }
        })
    }

    return (
        <div className='controls'>
            <FontAwesomeIcon icon={faChevronLeft} className='controls-left' onClick={() => handleControls('back')} />
            <FontAwesomeIcon icon={isPlaying? faPause : faPlay} onClick={handlePlay} className='controls-play' />
            <FontAwesomeIcon icon={ faChevronRight} className='controls-right' onClick={() => handleControls('forward')}/>
        </div>
    )
}



export default Controls
