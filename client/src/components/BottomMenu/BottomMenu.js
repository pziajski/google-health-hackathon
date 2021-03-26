import React from 'react';
import { NavLink } from "react-router-dom";
import "./BottomMenu.scss";
import homeIcon from "../../assets/svg/home.svg";
import coverageIcon from "../../assets/svg/coverage.svg";
import learnIcon from "../../assets/svg/learn.svg";
import profileIcon from "../../assets/svg/profile.svg";

export default function BottomMenu() {
    return (
        <div className="bottom-menu">
            <ul className="bottom-menu__list">
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/home">
                        <img src={homeIcon} className="bottom-menu__icon" />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/coverage">
                        <img src={coverageIcon} className="bottom-menu__icon" />
                        <p>Coverage</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/learn">
                        <img src={learnIcon} className="bottom-menu__icon" />
                        <p>Learn</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/profile">
                        <img src={profileIcon} className="bottom-menu__icon" />
                        <p>Profile</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}