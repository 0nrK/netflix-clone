import React from 'react'
import "./ListItem.scss"

const ListItem = ({ props }) => {
    return (
        <div style={{ background: `url(${props.img})` }} className="list-item">


        </div>
    )
}

export default ListItem