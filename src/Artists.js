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
                <div className='artistTitleBar'>Hey TiG</div>
                <div className='artistTitle'>Hey TiG</div>
                <a className='artistButtons' href="https://youtu.be/vq68sNkb93U?si=U3f1r73RUtatOZ2t">Watch on <span style={{"textDecoration": "underline"}} >Y</span>outube</a>
            </div>
            
            <br></br>

            <div className="indArtistContainer">
            <div className='artistTitleBar'>Boat Gang Ent</div>
            <div className='artistTitle'>Boat Gang Ent</div>
            <a className='artistButtons' href="https://youtu.be/6nD1KWs_SIo?si=jwdO_ruG8YRZpPD_">Watch on <span style={{"textDecoration": "underline"}} >Y</span>outube</a>
            </div>
            
            </div>

        </div>
    );
}

export default Artists;