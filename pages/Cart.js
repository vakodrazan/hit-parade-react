import React, { useContext, useState  } from 'react';
import { Context } from '../Context';
import CartItem from "../Components/CartItem";

function Cart() {
    const { cartItem, emptyCart } = useContext(Context);
    const [buyBtnText, setBuyBtnText] = useState("Buy");

    const songItem = cartItem.map(song => <CartItem key={song.id} song={song} />)

    function handleBuy() {
        setBuyBtnText("In process...");
        setTimeout(() => {
            emptyCart();
            setBuyBtnText("Buy");
        }, 1000);
    }

    return (
        <div>
            {songItem}
            <p>Total: </p>
            {cartItem.length > 0 
                ? <button onClick={handleBuy} >{buyBtnText}</button>  
                : <p>You have no song in your cart!</p>
            }
        </div>
    )
}

export default Cart
