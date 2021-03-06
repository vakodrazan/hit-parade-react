import React, { useEffect, useState } from 'react';
import songs from "./songs.json";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState(songs);
    const [cartItem, setCartItem] = useState([]);

    function initAllSongs() {
        const lsAllsong = JSON.parse(localStorage.getItem("allSongs"));
        if (lsAllsong) {
            setAllSongs(lsAllsong);
        }
    }

    function initCartItem() {
        const lsCartItem = JSON.parse(localStorage.getItem("cartItem"));
        if (lsCartItem) {
            setCartItem(lsCartItem)
        }
    }

    useEffect(() => {
        initAllSongs();
        initCartItem()
    }, [])

    useEffect(() => {
        if (allSongs.length > 0) {
            localStorage.setItem("allSongs", JSON.stringify(allSongs))
        }
    }, [allSongs]);

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }, [cartItem])

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

    function addNewSong(e) {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const price = Number(form.price.value);
        const style = form.style.value;
        const lyrics = form.lyrics.value;

        if (!title)  return;

        const newSong = {
            title,
            name,
            price,
            style,
            lyrics,
            upvote: 0,
            downvote: 0,
            id: Date.now()
        }
        setAllSongs(prevSong => [...prevSong, newSong]);
        e.target.reset();
    }

    function removeItem(id) {
        const findItemToDelete = allSongs.filter(song => song.id !== id);
        setAllSongs(findItemToDelete)
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
            emptyCart,
            addNewSong,
            removeItem
        }}
    >
        {children}
    </Context.Provider>
}

export {ContextProvider, Context}
