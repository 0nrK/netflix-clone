import React, { useState } from 'react'
import "./ListItem.scss"
import { AiOutlineDislike, AiOutlineLike, AiOutlinePlayCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { useEffect } from 'react'

const ListItem = ({ props }) => {

    const [isLargeRow, setIsLargeRow] = useState(false)

    useEffect(() => {
        if (props.title === "Netflix Originals") {
            setIsLargeRow(true)
        }
    }, [props])


    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="list-item-container" >
            <div className="list-item" >
                <img className={`image ${isLargeRow ? "null" : "large"}`} src={props.img} alt="" />
            </div>
        </div>
    )
}

export default ListItem