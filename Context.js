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

    return <Context.Provider value={{allSongs, toggleFavourite}}>
        {children}
    </Context.Provider>
}

export {ContextProvider, Context}
