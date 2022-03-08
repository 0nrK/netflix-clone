import React, { useState } from 'react'
import "./ListItem.scss"
import { AiOutlineDislike, AiOutlineLike, AiOutlinePlayCircle, AiOutlinePlusCircle } from "react-icons/ai"

const ListItem = ({ props }) => {
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div style={{ background: `url(${props.img})` }} className="list-item">

        </div>
    )
}

export default ListItem