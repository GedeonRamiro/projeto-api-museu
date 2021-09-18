import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import People from './pages/People/People'

const Routes: React.FC = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/:object">
                <People />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes