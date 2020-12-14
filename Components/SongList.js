import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
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
                    className="ri-shopping-cart-2-fill icon-fill"
                ></i>
            )
        }
        return (
            <i 
                onClick={() => addToCart(song)} 
                className="ri-shopping-cart-2-line icon-lightblue"
            ></i>
        )
    }

    return (
        <section className="song-list section-layout">
            <span>
                {favouriteIcon()}
            </span>

            <div>
                <h3>{song.title}</h3>
                <span>{song.name}</span>
            </div>
            <div className="votes">
                <div>
                    <span>{song.upvote}</span>
                    <i onClick={() => toggleUpvote(song.id)} className="ri-arrow-up-line"></i>
                </div>
                <div>
                    <span>{song.downvote}</span>
                    <i onClick={() => toggleDownvote(song.id)} className="ri-arrow-down-line"></i>
                </div>
            </div>
            <span>
                {cartIcon()}
            </span>
            <span>
                <Link to={`/song/${song.id}`}>
                    <i className="ri-more-fill icon-lightblue"></i>
                </Link>
            </span>
        </section>
    )
}

export default SongList
