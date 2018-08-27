import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* Import CSS */
import css from './styles/style.styl';
//import components
import App from './components/App';
import Single from './components/Single';
import Grid from './components/Grid';

render(
    <Provider store = {store}>
        <Router history={history}>
            <Route path="/" component = { App }>
                <IndexRoute component = { Grid } />
                <Route path="/view/:postId" component={ Single }/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);