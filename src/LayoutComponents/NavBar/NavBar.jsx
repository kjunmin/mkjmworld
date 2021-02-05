import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import Logo from './Logo';


function Navbar(props) {
    const LIGHT_BUTTON_URL = `${process.env.PUBLIC_URL}/assets/svg/day-icon.svg`;
    const DARK_BUTTON_URL = `${process.env.PUBLIC_URL}/assets/svg/night-icon.svg`;
    const { switchTheme, currTheme } = props;
    const [themeButtonUrl, setThemeButtonUrl] = useState()
    const [key, setKey] = useState(0);

    const variants = {
        enter: {
            y: -300,
            opacity: 0
        },
        center: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -300,
            opacity: 0
        },
    };

    useEffect(() => {
        setThemeClass()
    }, [])

    function setThemeClass() {
        const iconUrl = currTheme === 'light-theme' ? LIGHT_BUTTON_URL : DARK_BUTTON_URL;
        setThemeButtonUrl(iconUrl)
    }

    function handleThemeChange() {
        const nextThemeUrl = themeButtonUrl === LIGHT_BUTTON_URL ? DARK_BUTTON_URL : LIGHT_BUTTON_URL;
        setThemeButtonUrl(nextThemeUrl);
        switchTheme(nextThemeUrl);
        setKey(prev => (prev + 1) % 2);
    }

    return (
        <nav className="navigation-bar">
            <NavLink
                className="navigation-logo"
                to="/">
                <Logo />
            </NavLink >
            <motion.img
                key={key}
                className={"navigation-theme-button"}
                onClick={handleThemeChange}
                src={themeButtonUrl}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit" />
        </nav>
    )
}

export default Navbar;