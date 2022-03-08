import React, { useState } from 'react'
import "./Navbar.scss";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [user, setUser] = useState(false)

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
                    <div className="nav-right">
                        <img
                            className="nav-pp"
                            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Navbar