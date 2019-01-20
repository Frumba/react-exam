import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';

import JedisList from './components/JedisList';

import { fetchJedis } from './actions/jedi';

class App extends Component {
  componentWillMount() {
    this.fetchJedis();
  }

  fetchJedis() {
    const { dispatch } = this.props;

    dispatch(fetchJedis());
  }

  render() {
    const { jedis } = this.props;

    return (
      <div className="App">
        <JedisList jedis={jedis} />
      </div>
    );
  }
}

App.propTypes = {
  jedis: PropTypes.array
};

function mapStateToProps({ jedis }) {
  return {
    jedis
  };
}

export default connect(mapStateToProps)(App);
