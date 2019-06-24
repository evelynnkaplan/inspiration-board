import React from 'react';
import Board from './Board.js';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Board name="evelynn" />);

    expect(wrapper).toMatchSnapshot();
  });

  
});