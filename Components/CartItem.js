import React from 'react'

function CartItem({song}) {
    return (
        <div>
            <i className="ri-delete-bin-line"></i>
            <div>
                <h3>{song.title}</h3>
                <span>{song.name}</span>
            </div>
            <p>{song.pprice}</p>
        </div>
    )
}

export default CartItem;
