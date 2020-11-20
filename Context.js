import React, { useEffect, useState } from 'react';
import songs from "./songs.json";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState(songs);
    const [cartItem, setCartItem] = useState([]);

    // Update favourite icon
    function toggleFavourite(id) {
        const newSongArr = allSongs.map(song => {
            if (song.id === id) {
                return {...song, isFavorite: !song.isFavorite}
            }
            return song;
        })
        setAllSongs(newSongArr)
    }

    // Update the score of upvote when clicking it
    function toggleUpvote(id) {
        const updateSong = allSongs.map(song => {
            if (song.id === id) {
                return {...song, upvote: song.upvote + 1}
            }
            return song;
        })
        setAllSongs(updateSong)
    }

    // Update the score of downvote
    function toggleDownvote(id) {
        const updateSong = allSongs.map(song => {
            if (song.id === id) {
                return {...song, downvote: song.downvote + 1}
            }
            return song;
        })
        setAllSongs(updateSong)
    }

    // Add to cart list
    function addToCart(song) {
        setCartItem(prevItems => [...prevItems, song])
    }

    // Remove from cart 
    function removeFromCart(songId) {
        setCartItem(prevItems => prevItems.filter(item => item.id !== songId));
    }
    function emptyCart() {
        setCartItem([])
    }


    return <Context.Provider 
        value={{
            allSongs, 
            toggleFavourite, 
            toggleUpvote, 
            toggleDownvote,
            cartItem,
            addToCart,
            removeFromCart,
            emptyCart
        }}
    >
        {children}
    </Context.Provider>
}

export {ContextProvider, Context}
