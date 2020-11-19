import { useState } from "react";

const Context = React.createContext();

function ContextProvider() {
    const [allSongs, setAllSongs] = useState();
}

export {ContextProvider, Context}; 