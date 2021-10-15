import React from 'react'

const LibraryCard = ({song,setCurrentSong,audioRef,setIsPlaying,currentSong, setNavState}) => {
    const handleCardClick = () => {
        console.log(song.id)
        setCurrentSong(song).then(() => {
            // console.log('done')
            audioRef.current.play()
            setIsPlaying(true)
            setNavState(false)
        })
    }
    return (
        <div className={`library-card-container ${currentSong.id === song.id? 'card-selected' : ''}`} onClick={handleCardClick}>
            <div className="library-card">
                <img src={song.cover} alt={song.name} />
                <div className="song-meta">
                    <div className="song-name">{song.name}</div>
                    <div className="artist-name">{song.artist}</div>
                </div>
            </div>
        </div>
    )
}
export default LibraryCard

//  
