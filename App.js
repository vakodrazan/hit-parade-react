import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add from './Components/Add';
import Header from './Components/Header';
import Styles from './Components/Styles';
import Cart from './pages/Cart';
import LyricsSong from './pages/LyricsSong';
import Songs from './pages/Songs';

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/" >
                    <Songs />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/styles">
                    <Styles />
                </Route>
                <Route path="/song/:songId">
                    <LyricsSong />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
