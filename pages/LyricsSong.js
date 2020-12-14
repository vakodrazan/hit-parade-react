import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Context } from '../Context';

function LyricsSong() {
    const {allSongs} = useContext(Context)
    const {songId} = useParams();
    let history = useHistory();

    const songLyrics = allSongs.find(song => song.id === Number(songId));

    return (
        <section>
            <i onClick={() => history.goBack()} className="ri-arrow-left-line"></i>
            <h2>{songLyrics.name}: {songLyrics.title}</h2>
            <div className="song-list">
                <h3>Lyrics</h3>
                <div dangerouslySetInnerHTML={{ __html: songLyrics.lyrics }}></div>
            </div>

        </section>
    )
}

export default LyricsSong;
