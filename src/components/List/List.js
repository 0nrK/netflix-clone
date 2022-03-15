import React, { useRef } from 'react'
import ListItem from '../ListItem/ListItem'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./List.scss"
const List = ({ props }) => {

    const scrollRef = useRef(null)

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    const listData = [{
        id: 1,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 7,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 8,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 9,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    },
    {
        id: 10,
        img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SL1000_.jpg"
    }
    ]
    return (
        <div className="list">
            <h1 className="list-title">Netflix Originals</h1>
            <div className="list-row-arrow-buttons">
                <div className="list-row-arrow left">
                    <IoIosArrowBack onClick={() => handleScroll(-1200)} className="list-row-arrowLeftBtn" />
                </div>
                <div className="list-row-arrow right">
                    <IoIosArrowForward onClick={() => handleScroll(+1200)} className="list-row-arrowRightBtn" />
                </div>
            </div>
            <div className="list-row" ref={scrollRef}>
                {listData.map((item) => {
                    return (
                        <ListItem key={item.id} props={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default List