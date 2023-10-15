import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homeContainer">
            <div className="homeIconsContainer" >
            <Link to="/Artists" className="homeIconLink">
            <img src="./1136.ico" className="homeIcon"/><br></br>
            <span>Artists</span>
            </Link>

            <Link to="/Merch" className="homeIconLink">
            <br></br>
            <img src="./1458.ico" className="homeIcon"/><br></br>
            <span>Merch</span>
            </Link>
            </div>

        </div>
    );
}

export default Home;