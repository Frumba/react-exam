import React, { Component } from 'react';

import JediModal from './JediModal';

export default class Header extends Component {
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

    return (
      <div className="header">
        <h1 className="title">Jedis handler</h1>
        <button className="jedi-open-modal" onClick={this.openModal} type="button">
          Add Jedi
        </button>
        <JediModal isOpen={modalIsOpen} onRequestClose={this.closeModal} className="modal" />
      </div>
    );
  }
}
