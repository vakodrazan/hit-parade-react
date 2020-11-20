import React, { useEffect, useState } from 'react';
import songs from "./songs.json";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState(songs)

    function toggleFavourite(id) {
        const newSongArr = allSongs.map(song => {
            if (song.id === id) {
                return {...song, isFavorite: !song.isFavorite}
            }
            return song;
        })
        setAllSongs(newSongArr)
    }

    function toggleUpvote(id) {
        const updateSong = allSongs.map(song => {
            if (song.id === id) {
                return {...song, upvote: song.upvote + 1}
            }
            return song;
        })
        setAllSongs(updateSong)
    }

    function toggleDownvote(id) {
        const updateSong = allSongs.map(song => {
            if (song.id === id) {
                return {...song, downvote: song.downvote + 1}
            }
            return song;
        })
        setAllSongs(updateSong)
    }


    return <Context.Provider 
        value={{
            allSongs, 
            toggleFavourite, 
            toggleUpvote, 
            toggleDownvote
        }}
    >
        {children}
    </Context.Provider>
}

export {ContextProvider, Context}
