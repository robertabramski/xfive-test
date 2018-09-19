import React from 'react';
import { shallow } from 'enzyme';
import RectButton from './';

it('renders without crashing', () => {
  let rectButton = shallow(<RectButton />);
});

it('displays a button name', () => {
  let name = 'Save';
  let rectButton = shallow(<RectButton name={name} />);
  let button = rectButton.find('button');

  expect(button.text()).toEqual(name);
});

it('handles a click', () => {
  let onClick = jest.fn();
  let rectButton = shallow(<RectButton onClick={onClick} />);
  let button = rectButton.find('button');

  jest.spyOn(rectButton.instance(), 'onClick');
  button.simulate('click');
  expect(onClick).toHaveBeenCalled();
});
