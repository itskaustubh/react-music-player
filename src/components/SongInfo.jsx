import React from 'react'

const SongInfo = ({song}) => {
    return (
        <div className='song-info'>
            <img src={song.cover} alt='cover'></img>
            <h4 className='song-name' title={song.name}>{song.name}</h4>
            <h5 className='song-artist' title={song.artist}>{song.artist}</h5>
        </div>
    )
}

export default SongInfo
