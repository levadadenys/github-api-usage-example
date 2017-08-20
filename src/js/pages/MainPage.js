import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersListActions from './../actions/UsersListActions';

import UsersList from './../components/UsersList';

class MainPage extends Component {

  static propTypes = {
    usersList: PropTypes.array.isRequired
  };

  constructor (props) {
    super(props);

    this.refreshUsers = this.refreshUsers.bind(this);
  }

  componentWillReceiveProps(props) {
    PropTypes.checkPropTypes(MainPage.propTypes, props, 'prop', this)
  }

  componentDidMount () {
    if(!this.props.usersList.length) {
      this.refreshUsers();
    }
  }

  refreshUsers () {
    fetch(`https://api.github.com/users?per_page=100&since=${Math.floor(Math.random() * 10000 * Math.random())}`)
      .then(res => res.json())
      .then(res => {
          this.props.actions.setUsers(res);

        }
      );
  }

  render () {
    return (
      <div className="main-page">
        <i className="refresh-users-btn fa fa-refresh"
           onClick={this.refreshUsers} />
        <UsersList users={this.props.usersList} />
      </div>
    );
  }
}

export default connect(
  state => ({usersList: state.usersList}),
  dispatch => ({actions: bindActionCreators(usersListActions, dispatch)})
)(MainPage);