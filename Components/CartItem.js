import React, { useContext } from 'react'
import { Context } from '../Context';

function CartItem({song}) {
    const { removeFromCart } = useContext(Context);

    return (
        <div className="song-list section-layout">
            <i 
                onClick={() => removeFromCart(song.id)} 
                className="ri-delete-bin-line icon-lightblue"
            ></i>
            <div>
                <h3>{song.title}</h3>
                <span className="artist">{song.name}</span>
            </div>
            <p className="price">{song.price} Ar</p>
        </div>
    )
}

export default CartItem;
