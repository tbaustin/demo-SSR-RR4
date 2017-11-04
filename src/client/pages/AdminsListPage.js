import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    if (this.props.admins.length > 0) {
      return;
    }
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)}</ul>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    admins: state.admins
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchAdmins: () => dispatch(actions.fetchAdmins())
  };
};

const loadData = store => {
  return store.dispatch(actions.fetchAdmins());
};

export default {
  component: connect(stateToProps, dispatchToProps)(requireAuth(AdminsListPage)),
  loadData: loadData
};
