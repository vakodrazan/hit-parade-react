import React, { useContext } from 'react'
import SongList from '../Components/SongList';
import { Context } from '../Context'

function Songs() {
    const { allSongs } = useContext(Context);
    return (
        <article>
            {allSongs.map(song => (
                <SongList key={song.id} song={song} />
            ))}
        </article>
    )
}

export default Songs
