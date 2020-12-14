import React, { useContext } from 'react'
import SongList from '../Components/SongList';
import { Context } from '../Context'

function Songs() {
    const { allSongs } = useContext(Context);

    // sort the list from the highest to the lowest (upvote - downvote)
    const sortSongs = allSongs.sort((itemA, itemB) => {
        const songA = itemA.upvote - itemA.downvote;
        const songB = itemB.upvote - itemB.downvote;
        return songB - songA;
    });

    return (
        <article className="songs">
            {sortSongs.map(song => (
                <SongList key={song.id} song={song} />
            ))}
        </article>
    )
}

export default Songs
