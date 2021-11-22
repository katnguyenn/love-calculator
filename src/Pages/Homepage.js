import React from 'react';
import { Link } from "react-router-dom";
import Calculator from "./Calculator";
import "../scss/homepage.scss";


const Homepage = () => {

    return (
        <div className="container">
            <h1>Welcome to Love Calculator</h1>
            <Link to="/calculator">
                <button>
                    Click Here
                </button>
            </Link>
           
        </div>
    )
}


export default Homepage;