import React, { useState, useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/Navbar/Navbar'
import axios from "axios"
import "./Home.scss"
import List from '../../components/List/List'
const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);


    useEffect(() => {
        const getRandomLists = async () => {
            try {
                await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }).then((res) => console.log(res)/* setLists(res.data) */)

            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists()
    }, [type, genre])

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            <List />
            <List />
            <List />
            <List />

        </div>
    )
}

export default Home