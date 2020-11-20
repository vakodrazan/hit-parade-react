import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import SongList from './Components/SongList';
import { Context } from './Context';
import Songs from './pages/Songs';

function App() {
    return (
        <div>
            <Header />
            <Songs />

            <Switch>
                <Route path='/style'>
                    <h2>Hello</h2>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
