import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/home/Home';
import Navbar from '../../components/navbar/Navbar';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path='/' component={ Home } />
                <Route 
                    path='/(.+)'
                    render={() => (
                        <Fragment>
                            <Navbar />
                            <div className="container">
                                <div className="main">
                                    {/* All components goes here */}
                                </div>
                            </div>
                        </Fragment>
                    )}
                />
            </Fragment>
        )
    }
}

export default App
