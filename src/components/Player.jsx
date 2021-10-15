import React, {useState, useRef} from 'react'
import useStateWithPromise from '../hooks/useStateWithPromise'
import songList from '../static/data'

// styles
import '../styles/player.scss'
import Seeker from './Seeker'
import Controls from './Controls'
import Nav from './Nav'

//components
import SongInfo from './SongInfo'
import Library from './Library'
import KeyboardControls from './KeyboardControls'

const songs = songList()
const Player = () => {
    const randomSong = Math.floor(Math.random() * ((songs.length - 1) + 1));
    const [currentSong, setCurrentSong] = useStateWithPromise(songs[randomSong])
    const [navState, setNavState] = useState(false)     

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
        // console.log(player.duration)
        setTimeUpdate({...timeUpdate, 
            totalTime : secondsToTime(player.duration),
            rawTotalTime : player.duration
        })
    }

    const handleManualSeek = (rawCurrentTime) => {
        console.log(rawCurrentTime)
        audioRef.current.currentTime = rawCurrentTime
    }

    const handleSongEnded = () => {
        const currentSongIndex = songs.findIndex(song => song.id === currentSong.id)
        const nextSongIndex = (currentSongIndex + 1) % (songs.length)
        setCurrentSong(songs[nextSongIndex]).then(() => {
            console.log('done')
            if(isPlaying){
                audioRef.current.play()
                setIsPlaying(true)
            } 
        })
    }

    return (
        <div className='super-class'>
            <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} 
                setIsPlaying={setIsPlaying} currentSong={currentSong} navState={navState} setNavState={setNavState}/>
            <SongInfo song={currentSong}/>
            <div className="song-controls">
                <Seeker time={timeUpdate} handleManualSeek = {handleManualSeek} currentSong={currentSong}/>
                <Controls isPlaying={isPlaying} handlePlay={handlePlay} songs={songs} setCurrentSong={setCurrentSong}
                     audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
            </div>
            <Nav navState={navState} setNavState={setNavState}/>
            <audio ref={audioRef} src={currentSong.audio}
                onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleInitialLoad} onEnded={handleSongEnded}></audio>

            <KeyboardControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef}/>
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
