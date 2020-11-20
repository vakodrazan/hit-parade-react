import React, { useEffect, useState } from 'react';
import songs from "./songs.json";

const Context = React.createContext();

function ContextProvider({children}) {
    const [allSongs, setAllSongs] = useState(songs)

    return <Context.Provider value={{allSongs}}>
        {children}
    </Context.Provider>
}

export {ContextProvider, Context}
