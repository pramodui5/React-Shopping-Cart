// Lib Import
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
// Local Import
import './App.css';
import { NavBarComponent } from './components/NavBar/NavBar.component';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponent/>
        <main className="mdl-layout__content">
          <div className="page-content">
            <Switch>
              {routes.map((route, i) => {
                return <Route key={i} {...route} />;
              })}
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
