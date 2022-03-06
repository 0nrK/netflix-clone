import React, { useRef } from 'react'
import ListItem from '../ListItem/ListItem'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./List.scss"
const List = () => {

    const scrollRef = useRef(null)

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    const listData = {
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    }
    return (
        <div className="list">
            <h1 className="list-title">Netflix Originals</h1>
            <div className="list-row-arrow-buttons">
                <div className="list-row-arrow left">
                    <IoIosArrowBack onClick={() => handleScroll(-375)} className="list-row-arrowLeftBtn" />
                </div>
                <div className="list-row-arrow right">
                    <IoIosArrowForward onClick={() => handleScroll(+375)} className="list-row-arrowRightBtn" />
                </div>
            </div>
            <div className="list-row" ref={scrollRef}>
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
                <ListItem className="list-item" props={listData} />
            </div>

        </div>
    )
}

export default List