import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import routes from './Routes';

let browserHistory = createBrowserHistory();

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps (props) {
    PropTypes.checkPropTypes(App.propTypes, props, 'prop', this);
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Switch>
            {routes.map((route, i) => <Route key={i} exact path={route.path}
                                             component={route.component} />
            )}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;