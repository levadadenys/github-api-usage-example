import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UsersListItem from './UsersListItem';

class UsersList extends Component {
  static defaultProps = {
    users: [
      {
        login: 'octocat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4&s=460',
        html_url: 'https://github.com/octocat'
      }]
  };

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
  };

  componentWillReceiveProps (props) {
    PropTypes.checkPropTypes(UsersList.propTypes, props, 'prop', this)
  }

  render () {
    return (
      <div className="users-list">
        {this.props.users.map(
          user => <UsersListItem key={user.id} login={user.login}
                                 html_url={user.html_url}
                                 avatar_url={user.avatar_url} />)}
      </div>
    );
  }
}

export default UsersList;