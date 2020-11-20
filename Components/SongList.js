import React, { useContext } from 'react'
import { Context } from '../Context'

function SongList({song}) {
    const { toggleFavourite} = useContext(Context);

    function favouriteIcon() {
        if (song.isFavorite) {
            return (
                <i 
                    onClick={() => toggleFavourite(song.id)}
                    className="ri-heart-fill"
                ></i>
            )
        }
        return <i onClick={() => toggleFavourite(song.id)} className="ri-heart-line"></i>
    }
    favouriteIcon()

    return (
        <section className="song-list">
            <span>
                {favouriteIcon()}
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
    )
}

export default SongList
