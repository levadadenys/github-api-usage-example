import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      got_data: false,
      login: 'octocat',
      avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4&s=460',
      html_url: 'https://github.com/octocat',
      name: 'The Octocat',
      followers: '',
      following: '',
      created_at: '2011-01-25T18:44:36Z',
      company: 'GitHub',
      email: null,
      location: 'San Francisco',
      blog: 'http://www.github.com/blog',
      bio: null,

    };
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(res => res.json())
      .then(res => this.setState({
        got_data: true,
        avatar_url: res.avatar_url,
        html_url: res.html_url,
        name: res.name,
        created_at: res.created_at,
        company: res.company,
        email: res.email,
        location: res.location,
        blog: res.blog,
        bio: res.bio
      }));

    fetch(
      `https://api.github.com/users/${this.props.match.params.username}/followers`)
      .then(res => res.json())
      .then(res => this.setState({
          followers: res.map(item => item.login).join(', ')
        }
      ));

    fetch(
      `https://api.github.com/users/${this.props.match.params.username}/following`)
      .then(res => res.json())
      .then(res => this.setState({
        following: res.map(item => item.login).join(', ')
      }));

  }

  render () {
    return (
      <div className="user-page">
        {this.state.got_data ? this._renderContent() : this._renderPreloader()}
      </div>

    );
  }

  _renderContent () {
    const USER = this.state;

    return (
      <div className="user-page-content">
        <div className="user-main-info">
          <img src={USER.avatar_url} alt="avatar" />
          <h1 className="login">{this.props.match.params.username}</h1>
          <br />
          <h1 className="user-name">{USER.name}</h1>
          <a className="user-url" href={USER.html_url} target="_blank">
            <h4>
              <i className="fa fa-github" />&nbsp;Github
            </h4>
          </a>
        </div>

        <div className="user-additional-info">
          {
            USER.company
              ? <span
                className="user-company"><b>Company:</b> {USER.company}</span>
              : null
          }
          <br />
          {
            USER.email
              ? <span className="user-email"><b>Email:</b> {USER.email}</span>
              : null
          }
          <br />
          {
            USER.location
              ? <span
                className="user-location"><b>Location:</b> {USER.location}</span>
              : null
          }
          <br />
          {
            USER.blog ?
              <span className="user-blog"><b>Blog: </b>{USER.blog}</span> : null

          }
          <br />
          {
            USER.bio
              ? <span className="user.bio"><b>Bio:</b> {USER.bio}</span>
              : null

          }
          <br />
          {
            USER.created_at
              ? <span
                className="user-created-at"><b>Created at:</b> {new Date(
              USER.created_at).toDateString()}</span>
              : null

          }
          <br />
          {
            USER.followers
              ? <span
                className="user-followers"><b>Followers:</b> {USER.followers}</span>
              : null
          }
          <br />
          {
            USER.following ? <span
                className="user-followings"><b>Following:</b> {USER.following}</span>
              : null

          }
          <br />
        </div>

        <Link to="/">
          <i className="fa fa-times" />
        </Link>
      </div>
    );
  }

  _renderPreloader () {
    return (
      <div className="user-page-preloader">
        <div className="spinner">
          <i className="fa fa-spinner fa-spin" />
        </div>
        <Link to="/">
          <i className="fa fa-times" />
        </Link>
      </div>
    );
  }
}

export default UserPage;