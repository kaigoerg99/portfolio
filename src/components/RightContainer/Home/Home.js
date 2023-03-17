import React from "react";
import './Home.css';
import profilePicture from '../../../img/profile.jpg';

const Home = () => {
    return (
        <div className="HomeContainer">
            <img src={profilePicture} alt='profilePicture' className='ProfilePicture'/>
            <div className="TextContainer">
                <span className="Heading">
                    A developer & collaborator at heart.
                </span>
                <span className="Text">
                    I am a web developer from Singapore born in 1999.
                    With an eye for design and a passion for visual creation, I build websites and apps with the purpose of making the best user experience possible.
                    I believe that both code and design can be beautiful, and I love efficient and minimalistic design.
                    Group environments are where I thrive, and I am a firm believer in effective communication.
                    In my free time I work out and watch soccer!
                </span>
            </div>
        </div>
    )
}

export default Home;