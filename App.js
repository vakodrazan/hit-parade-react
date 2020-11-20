import React, { useContext } from 'react';
import Header from './Components/Header';
import SongList from './Components/SongList';
import { Context } from './Context';

function App() {
    // const { allSongs } = useContext(Context);

    return (
        <div>
            <Header />
            <SongList />
        </div>
    )
}

export default App;
