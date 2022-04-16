import React, { useRef } from 'react'
import ListItem from '../ListItem/ListItem'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./List.scss"
import { useState } from 'react'
import { useEffect } from 'react'
const List = ({ data, genre }) => {


    const [filteredData, setFilteredData] = useState()


    const scrollRef = useRef(null)

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    useEffect(() => {
        setFilteredData(data.filter((el) => el.genre === genre))
    }, [data])

    return (
        <div className="list">
            <h1 className="list-title">{genre}</h1>
            <div className="list-row-arrow-buttons">
                <div className="list-row-arrow left">
                    <IoIosArrowBack onClick={() => handleScroll(-1200)} className="list-row-arrowLeftBtn" />
                </div>
                <div className="list-row-arrow right">
                    <IoIosArrowForward onClick={() => handleScroll(+1200)} className="list-row-arrowRightBtn" />
                </div>
            </div>
            <div className="list-row" ref={scrollRef}>
                {filteredData?.map((item) => {
                    return (
                        <ListItem key={item.id} props={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default List