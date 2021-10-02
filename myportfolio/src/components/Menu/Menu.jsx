import React from 'react';

import './menu.scss'

export const Menu = (props) => {
    const {menuOpen, setMenuOpen} = props;

    const onClickCLose = ()=> {
        setMenuOpen((prevState)=>!prevState)
    } 

    return (
        <div className={'menu '+(menuOpen && 'active') }>
            <ul>
                <li onClick={onClickCLose}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={onClickCLose}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={onClickCLose}>
                    <a href='#works'>Works</a>
                </li>
                <li onClick={onClickCLose}>
                    <a href='#testimonials'>Testimonials</a>
                </li>
                <li onClick={onClickCLose}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
