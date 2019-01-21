import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { addJedi } from '../actions/jedi';

class JediModal extends Component {
  submit(event) {
    event.preventDefault();

    const jediName = ReactDOM.findDOMNode(this.refs.jediName).value.trim();

    if (!jediName) {
      console.error('jedi name empty');
      return;
    }

    const { dispatch, onRequestClose } = this.props;

    dispatch(addJedi(jediName)).then(() => {
      onRequestClose();
    });
  }

  render() {
    const { isOpen, onRequestClose } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Add a new Jedi</h2>
        </div>
        <div className="modal-body">
          <form className="modal-jedi-form">
            <input type="text" placeholder="Jedi Name" ref="jediName" className="jedi-name" />
            <button type="submit" className="jedi-submit" onClick={this.submit.bind(this)}>
              Add
            </button>
          </form>
        </div>
      </Modal>
    );
  }
}

JediModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default JediModal;
