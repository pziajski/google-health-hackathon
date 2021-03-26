import React from 'react';
import './TopNavBar.scss';
import menuBack from "../../assets/svg/menu-back.svg"

const Navbar = (props) => {
    return (
        <nav className='top-nav-bar'>
            <img className="top-nav-bar__img" src={menuBack} />
            <div className="top-nav-bar__logo">
                {props.title}
            </div>
        </nav>
    )
}

export default Navbar