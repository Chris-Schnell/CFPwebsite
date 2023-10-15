import React from 'react';
import { Link } from 'react-router-dom';

function Artists() {
    return (
        <div className="ArtistsContainer">

            <div className="ArtistsMiddleContainer">

            <Link to="/">
                <img src="./921.ico" className="backButton"/>
                </Link>

            <div className="indArtistContainer">
                <div className='artistTitleBar'>Night City</div>
                <div className='artistTitle'>Night City</div>
                <a className='artistButtons' href="https://soundcloud.com/nightcity0x"><span style={{"textDecoration": "underline"}}>L</span>isten on Soundcloud</a>
            </div>
            
            <br></br>

            <div className="indArtistContainer">
            <div className='artistTitleBar'>Boat Gang Ent</div>
            <div className='artistTitle'>Boat Gang Ent</div>
            <a className='artistButtons' href="https://www.youtube.com/@BoatGangEnt/videos">Watch on <span style={{"textDecoration": "underline"}} >Y</span>outube</a>
            </div>
            
            </div>

        </div>
    );
}

export default Artists;