import React from "react";
import { Link } from "react-router-dom";
import './LinksContainer.css'

const LinksContainer = () => {
    return (
        <div className="LinksContainer">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LinksContainer;