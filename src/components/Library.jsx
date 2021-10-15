import React, { useEffect } from 'react'
import LibraryCard from './LibraryCard'
import { useRef } from 'react/cjs/react.development'

const Library = ({songs,setCurrentSong,audioRef,setIsPlaying,currentSong, navState,setNavState}) => {
    // console.log(songs)
    
    const libRef = useRef(null)
    // Hook that alerts clicks outside of this component
    // https://stackoverflow.com/a/42234988
    useEffect(() => {
        if (navState === false) { return }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navState]);
    
    function handleClickOutside(event) {
        // console.log('listening')
        console.log(event.target.className)
        if (libRef.current && !libRef.current.contains(event.target) && !event.target.className.includes('nav-library-button')) {
            console.log("closing library");
            setNavState(false)
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }

    return (
        <div className={`library-container ${navState? '' : 'hide-library' }`} ref={libRef}>
            <div className="library-title">Library</div>
            <div className="library">
                {songs.map(song => <LibraryCard song={song} key={song.id} setCurrentSong={setCurrentSong} 
                                        audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong} 
                                        setNavState={setNavState} />)}
            </div>
        </div>
    )
}

export default Library
