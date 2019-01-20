import React, { PropTypes } from 'react';

const JedisList = (props) => {
  const { jedis } = props;

  return (
    <div className="jedis">
      {jedis.map((jedi) => (
        <div key={jedi.id}>
          Jedi: id: {jedi.id} name: {jedi.name}
        </div>
      ))}
    </div>
  );
};

JedisList.propTypes = {
  jedis: PropTypes.array
};

export default JedisList;
