import React from 'react';
import { shallow } from 'enzyme';
import RectButton from './';

it('renders without crashing', () => {
  let rectButton = shallow(<RectButton />);
});

it('displays a button name', () => {
  let name = 'Save';
  let rectButton = shallow(<RectButton name={name} />);

  expect(rectButton.text()).toEqual(name);
});

it('handles a click', () => {
  let onClick = jest.fn();
  let rectButton = shallow(<RectButton onClick={onClick} />);

  jest.spyOn(rectButton.instance(), 'onClick');
  rectButton.simulate('click');
  expect(onClick).toHaveBeenCalled();
});
