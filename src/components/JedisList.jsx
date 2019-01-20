import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const JedisList = (props) => {
  const { jedis } = props;

  return (
    <Fragment>
      {jedis.map((jedi) => (
        <div key={jedi.id}>
          Jedi: id: {jedi.id} name: {jedi.name}
        </div>
      ))}
    </Fragment>
  );
};

JedisList.propTypes = {
  jedis: PropTypes.array
};

JedisList.defaultProps = {
  jedis: []
};

export default JedisList;
