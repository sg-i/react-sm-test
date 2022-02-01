import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import { Search } from '../search';
import { Add } from '../Add';

export class App extends React.Component {
  render() {
    return (
      <div className="ui-app">
        {/* navigation */}

        <div className="ui-app__navigation">
          <Link
            className="ui-app__navigation__link"
            activeClassName="ui-app__navigation__link--active"
            to="/"
            exact={true}>
            Поиск
          </Link>

          <Link
            className="ui-app__navigation__link"
            activeClassName="ui-app__navigation__link--active"
            to="/add"
            exact={true}>
            Добавить товар
          </Link>
        </div>

        <Switch>
          <Route path="/" exact={true} component={Search} />

          <Route path="/add" exact={true} component={Add} />
        </Switch>
      </div>
    );
  }
}
