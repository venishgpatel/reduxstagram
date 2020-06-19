import React from 'react';
import PhotoGrid from './photoGrid';
import Single from './single';

import { Route, Link, Redirect, Switch } from 'react-router-dom';
import css from '../styles/style.styl';

class Main extends React.Component {
  render() {
    return(
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
            <Route 
              exact 
              path="/" 
              render={({ match }) => {
                return React.cloneElement(<PhotoGrid />, this.props);
              }}
            />
            <Route 
              exact 
              path="/view/:postId" 
              render={({ match }) => {
                return React.cloneElement(<Single postId={location.pathname} />, this.props);
              }}
            />
            <Redirect from="*" to="/" />
          </Switch>
      </div>
    )
  }
}

export default Main;