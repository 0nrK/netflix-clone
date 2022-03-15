import React, { useState, useEffect } from 'react'
import { BsPlayFill } from "react-icons/bs"
import axios from "axios"
import "./Featured.scss"

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({
        img: "https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/09/adult-swimden-heyecanlandiran-rick-and-morty-paylasimi.jpg?w=1280&ssl=1",
        title: "Rick And Morty",
        desc: "Officia deserunt ex fugiat elit Lorem non cupidatat exercitation do enim. Aliquip fugiat mollit irure sint minim quis labore occaecat excepteur Lorem eu aute in. Nisi et anim id in proident deserunt anim labore aliquip mollit. Sit cillum in incididunt ad nostrud adipisicing consequat in irure et exercitation."
    })

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                await axios.get(`/movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }).then((res) => setContent(res.data[0]))

            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent()
    }, [type])
    return (
        <div className="featured" /* style={{ background: `linear-gradient(to right, #111 30%, transparent 80%), url(${content.img})` }} */>
            <div className="featured-info">
                <h1 className="title">{content.title}</h1>
                <p className="desc">{content.desc}</p>
                <button className="playBtn">
                    <BsPlayFill className="playBtn-icon" />
                    <span>Play</span>
                </button>
                <span>Genres: </span>
            </div>
        </div >
    )
}

export default Featured