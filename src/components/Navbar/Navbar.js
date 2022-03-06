import React, { useState } from 'react'
import "./Navbar.scss";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        console.log(isScrolled);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"} >
            <div className="nav-container">
                <div className="nav-left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <ul>
                        <li>
                            Homepage
                        </li>
                        <li>
                            Series
                        </li>
                        <li>
                            Movies
                        </li>
                        <li>
                            New And Popular
                        </li>
                        <li>
                            My List
                        </li>
                    </ul>
                </div>
                <div className="nav-right">





                    <img
                        className="nav-pp"
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="nav-profile">
                        {/* Dropdown Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="nav-options">
                            {/*<span onClick={() => dispatch(logout())}>Logout</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar