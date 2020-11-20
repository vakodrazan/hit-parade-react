import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Styles from './Components/Styles';
import Cart from './pages/Cart';
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
                <Route path="/styles">
                    <Styles />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
