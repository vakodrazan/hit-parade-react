import React, { useContext } from 'react'
import { Context } from '../Context'

function SongList() {
    const {allSongs} = useContext(Context);
    return (
        <div>
            {allSongs.map(song => (
                <section key={song.id}>
                    <span>
                        <i className="ri-heart-line"></i>
                    </span>
                    <div>
                        <h3>{song.title}</h3>
                        <span>{song.name}</span>
                    </div>
                    <p>
                        <span>{song.upvote}</span>
                        <i className="ri-arrow-up-line"></i>
                    </p>
                    <p>
                        <span>{song.downvote}</span>
                        <i className="ri-arrow-down-line fav"></i>
                    </p>
                    <span>
                        <i className="ri-shopping-cart-2-line"></i>
                    </span>
                    <span>
                        <i className="ri-more-fill"></i>
                    </span>
                </section>
            ))}
        </div>
    )
}

export default SongList
