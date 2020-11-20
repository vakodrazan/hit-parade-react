import React, { useContext } from 'react';
import SongList from './Components/SongList';
import { Context } from './Context';

function App() {
    // const { allSongs } = useContext(Context);

    return (
        <div>
            <h1>Hit Parade</h1>
            <SongList />
        </div>
    )
}

export default App;
