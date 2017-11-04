import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import actions from '../actions';

class UsersList extends Component {
  componentDidMount() {
    if (this.props.users.length > 0) {
      return;
    }
    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {this.head()}
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    users: state.users
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(actions.fetchUsers())
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchUsers());
};

export default {
  loadData: loadData,
  component: connect(stateToProps, dispatchToProps)(UsersList)
};
