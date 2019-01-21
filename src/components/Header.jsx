import React, { Component } from 'react';
import PropTypes from 'prop-types';

import JediModal from './JediModal';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="header">
        <h1 className="title">Jedis handler</h1>
        <button className="jedi-open-modal" onClick={this.openModal} type="button">
          Add Jedi
        </button>
        <JediModal dispatch={dispatch} isOpen={modalIsOpen} onRequestClose={this.closeModal} className="modal" />
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Header;
