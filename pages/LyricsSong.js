import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

function LyricsSong() {
    const {allSongs} = useContext(Context)
    const {songId} = useParams();

    const songLyrics = allSongs.find(song => song.id === Number(songId));

    return (
        <div className="song-list">
            <h2>{songLyrics.name}: {songLyrics.title}</h2>
            <p>{songLyrics.lyrics}</p>
        </div>
    )
}

export default LyricsSong;
