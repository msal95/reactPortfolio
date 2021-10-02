import React from 'react'
import {Person, Mail} from '@material-ui/icons'

import './topbar.scss'

export const Topbar = (props) => {
    const {menuOpen, setMenuOpen} = props;

    const onToggleMenu = ()=> {
        setMenuOpen((prevState)=>!prevState)
    }

    return (
        <div className={'topbar ' + ( menuOpen && 'active' )} >
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>genious.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+92 303 3333333</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>msal_soft@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger" onClick={onToggleMenu}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
