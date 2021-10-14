import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({navState, setNavState}) => {
    const handleNavClick = () => {
        setNavState(!navState)
    }
    return (
        <div className='nav-container'>
            <button onClick={handleNavClick}>
                <FontAwesomeIcon icon={faMusic} className='icon-music'/>
                <p className='nav-title'>Library</p>
            </button>   
        </div>
    )
}

export default Nav
