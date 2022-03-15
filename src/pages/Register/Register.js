import React, { useState, useRef } from 'react'
import { FaqItem } from '../../components/FaqItem/FaqItem'
import Footer from '../../components/Footer/Footer'
import "./Register.scss"
const Register = () => {
    const ansRef = useRef(null)

    const faqData = [
        {
            id: 1,
            question: "What is Netflix?",
            answer:
                `Netflix is a streaming service that offers a wide variety of award-winning TV shows, 
        movies, anime, documentaries, and more on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
        },
        {
            id: 2,
            question: "How much does Netflix cost?",
            answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 26.99 TL to 54.99 TL a month. No extra costs, no contracts.`
        },
        {
            id: 3,
            question: "Where can I watch?",
            answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
        },
        {
            id: 4,
            question: "How do I cancel?",
            answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
        },
        {
            id: 5,
            question: "What can I watch on Netflix?",
            answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
        },
        {
            id: 6,
            question: "Is Netflix good for kids?",
            answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }
    ]



    return (
        <div className="register-page">
            <div className="banner">
                <div className="nav">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />
                    <button className="sign-in">Sign In</button>
                </div>
                <div className="register-banner">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="form">
                        <input placeholder="Enter your e-mail" type="email" />
                        <button>GET STARTED  </button>
                    </div>
                </div>
            </div>
            <hr />
            <section className="_">
                <div className="text">
                    <h1>Enjoy your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div >
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        alt="" />
                </div>
            </section>
            <hr />
            <section className="_">
                <div>
                    <img
                        src="https://occ-0-5153-778.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                        alt="" />
                </div>
                <div className="text">
                    <h1>
                        Create profiles for kids.
                    </h1>
                    <p>
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </p>
                </div>
            </section>
            <hr />
            {/* FAQ */}
            <section className="faq">
                <h1>Frequently Asked Questions</h1>

                {faqData.map((que) => {
                    return (
                        <FaqItem key={que.id} props={que} />
                    )
                })}

            </section>
            <hr />
            <Footer />
        </div>
    )
}

export default Register