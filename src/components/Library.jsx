import React from 'react'
import LibraryCard from './LibraryCard'

const Library = ({songs,setCurrentSong,audioRef,setIsPlaying,currentSong}) => {
    console.log(songs)
    return (
        <div className="library-container">
            <div className="library-title">Library</div>
            <div className="library">
                {songs.map(song => <LibraryCard song={song} key={song.id} setCurrentSong={setCurrentSong} audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong} />)}
            </div>
        </div>
    )
}

export default Library