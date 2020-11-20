import React, { useContext } from 'react'
import { Context } from '../Context'

function SongList({song}) {
    const { 
        toggleFavourite, 
        toggleUpvote, 
        toggleDownvote, 
        cartItem,
        addToCart,
        removeFromCart
    } = useContext(Context);

    function favouriteIcon() {
        if (song.isFavorite) {
            return (
                <i 
                    onClick={() => toggleFavourite(song.id)}
                    className="ri-heart-fill icon-fill"
                ></i>
            )
        }
        return (
            <i 
                onClick={() => toggleFavourite(song.id)} 
                className="ri-heart-line icon-fill"
            ></i>
        )
    }

    function cartIcon() {
        const isALreadyInCart = cartItem.some(item => item.id === song.id)
        if (isALreadyInCart) {
            return (
                <i 
                    onClick={() => removeFromCart(song.id)}
                    className="ri-shopping-cart-2-fill"
                ></i>
            )
        }
        return (
            <i 
                onClick={() => addToCart(song)} 
                className="ri-shopping-cart-2-line"
            ></i>
        )
    }

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
                <i onClick={() => toggleUpvote(song.id)} className="ri-arrow-up-line"></i>
            </p>
            <p>
                <span>{song.downvote}</span>
                <i onClick={() => toggleDownvote(song.id)} className="ri-arrow-down-line fav"></i>
            </p>
            <span>
                {cartIcon()}
            </span>
            <span>
                <i className="ri-more-fill"></i>
            </span>
        </section>
    )
}

export default SongList
