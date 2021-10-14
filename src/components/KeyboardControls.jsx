import React, { useEffect } from 'react'

const KeyboardControls = ({setIsPlaying,isPlaying,audioRef}) => {

    useEffect(() => {
        document.addEventListener('keyup', handleSpacePress, false)
    },[setIsPlaying,isPlaying,audioRef])

    const handleSpacePress = event => {
        if (event.code === 'Space') {
          console.log('Space pressed')
          if(isPlaying){
                audioRef.current.pause()
                setIsPlaying(false)
          }else{
                audioRef.current.play()
                setIsPlaying(true)
          }
          document.removeEventListener('keyup',handleSpacePress, false)
        }
    }


    return (<div></div>)
}

export default KeyboardControls
