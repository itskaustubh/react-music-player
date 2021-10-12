import React, {useState, useRef} from 'react'
import useStateWithPromise from '../hooks/useStateWithPromise'
import Seeker from './Seeker'
import Controls from './Controls'
import songList from '../static/data'

// styles
import '../styles/player.scss'
import SongInfo from './SongInfo'
import Library from './Library'

const Player = () => {
    const [songs, setSongs] = useState(songList())
    const randomSong = Math.floor(Math.random() * ((songs.length - 1) + 1));
    const [currentSong, setCurrentSong] = useStateWithPromise(songs[randomSong])

    const [isPlaying, setIsPlaying] = useState(false)
    const [timeUpdate, setTimeUpdate] = useState({
        currentTime : '0:00',
        totalTime : '    ',
        rawCurrentTime : 0,
        rawTotalTime : 0
    })

    const audioRef = useRef(null)
    
    const handlePlay = () => {
        if(isPlaying){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleTimeUpdate = ({target : player}) => { 
        setTimeUpdate({...timeUpdate, currentTime : secondsToTime(player.currentTime), rawCurrentTime : player.currentTime})
    }

    const handleInitialLoad = ({target : player}) => {
        console.log(player.duration)
        setTimeUpdate({...timeUpdate, 
            totalTime : secondsToTime(player.duration),
            rawTotalTime : player.duration
        })
    }

    const handleManualSeek = (rawCurrentTime) => {
        console.log(rawCurrentTime)
        audioRef.current.currentTime = rawCurrentTime
    }

    return (
        <div className='super-class'>
            <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
            <SongInfo song={currentSong}/>
            <div className="song-controls">
                <Seeker time={timeUpdate} handleManualSeek = {handleManualSeek}/>
                <Controls isPlaying={isPlaying} handlePlay={handlePlay}/>
            </div>
            
            <audio ref={audioRef} src={currentSong.audio}
                onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleInitialLoad}></audio>
        </div>
    )   
}

function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(1,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(1,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    
    return (h > 0 ? h + ':' : '')  + m + ':' + s;
}

export default Player
