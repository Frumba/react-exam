import React from 'react';
import renderer from 'react-test-renderer';

import JedisList from '../JedisList';

import dbJSON from '../../../api/db.json';

it('Jedis list empty', () => {
  const tree = renderer.create(<JedisList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Jedis list with elements', () => {
  const tree = renderer.create(<JedisList jedis={dbJSON.jedis} />).toJSON();
  expect(tree).toMatchSnapshot();
});
