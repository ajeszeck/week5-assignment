import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import PokemonPage from './PokemonPage';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/pokemon/:id" component={PokemonPage} />
            </Switch>
        </Router>
    );
}

export default Routes;
