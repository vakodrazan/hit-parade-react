import React, { useContext  } from 'react';
import { Context } from '../Context';
import CartItem from "../Components/CartItem";

function Cart() {
    const { cartItem } = useContext(Context);

    const songItem = cartItem.map(song => <CartItem key={song.id} song={song} />)
    return (
        <div>
            {songItem}
            <p>Total: </p>
            <button>Buy</button>
        </div>
    )
}

export default Cart
