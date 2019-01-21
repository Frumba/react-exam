import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

jest.mock('../JediModal', () => 'jediModal');

it('Header render normally', () => {
  const tree = renderer.create(<Header dispatch={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
