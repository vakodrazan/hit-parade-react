import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

function LyricsSong() {
    const {allSongs} = useContext(Context)
    const {songId} = useParams();

    const songLyrics = allSongs.find(song => song.id === Number(songId));

    return (
        <section>
            <h2>{songLyrics.name}: {songLyrics.title}</h2>
            <div className="song-list">
                <h3>Lyrics</h3>
                <p className="lyrics">{songLyrics.lyrics}</p>
            </div>

        </section>
    )
}

export default LyricsSong;
