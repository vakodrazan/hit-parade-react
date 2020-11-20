import React, { useContext } from 'react'
import { Context } from '../Context';

function CartItem({song}) {
    const { removeFromCart } = useContext(Context);

    return (
        <div>
            <i 
                onClick={() => removeFromCart(song.id)} 
                className="ri-delete-bin-line"
            ></i>
            <div>
                <h3>{song.title}</h3>
                <span>{song.name}</span>
            </div>
            <p>{song.price}</p>
        </div>
    )
}

export default CartItem;
