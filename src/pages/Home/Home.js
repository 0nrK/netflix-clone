import React, { useState, useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/Navbar/Navbar'
import axios from "axios"
import "./Home.scss"
import List from '../../components/List/List'
import { movies } from "../../data.js"
const Home = ({ type }) => {


    const [data, setData] = useState(movies)

    const [genres, setGenres] = useState(["Netflix Originals", "Action", "Documentary"])
    console.log(data);

    return (
        <div className="home">
            <Navbar />
            <Featured />

            {genres.map((genre) => { return <List genre={genre} data={data} /> })}




        </div>
    )
}

export default Home