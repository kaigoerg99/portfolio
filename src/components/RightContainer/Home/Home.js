import React from "react";
import './Home.css';
import profilePicture from '../../../img/profile.jpg';

const Home = () => {
    return (
        <div className="HomeContainer">
            <img src={profilePicture} alt='profilePicture' className='ProfilePicture'/>
            <div className="TextContainer">
                <span className="Heading">
                    A designer & gamer at heart.
                </span>
                <p className="Text">
                    Web developer born in Singapore in 1999. With an eye for design and a passion for visual creation, I build websites with the purpose of making the best user experience possible. I believe that minimalism is the cornerstone of effective and beautiful design. 
                </p>
            </div>
        </div>
    )
}

export default Home;