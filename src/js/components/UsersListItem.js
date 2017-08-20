import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class UsersListItem extends Component {
  static defaultProps = {
    login: 'octocat',
    avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4&s=460',
    html_url: 'https://github.com/octocat'
  };

  static propTypes = {
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string
  };

  componentWillReceiveProps (props) {
    PropTypes.checkPropTypes(UsersListItem.propTypes, props, 'prop', this);
  }

  render () {
    return (
      <div className="users-list-item">
        <Link to={`/users/${this.props.login}`}>
          <img src={this.props.avatar_url} alt="Avatar" />
        </Link>
        <div>
          <h1>{this.props.login}</h1>
          <a href={this.props.html_url} target="_blank">
            <span>
              <i className="fa fa-github" />&nbsp;Github
            </span>
          </a>

        </div>
      </div>
    );
  }
}

export default UsersListItem;