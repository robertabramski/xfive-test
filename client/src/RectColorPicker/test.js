import React from 'react';
import { shallow, mount } from 'enzyme';
import RectColorPicker from './';

it('renders without crashing', () => {
  let rectColorPicker = shallow(<RectColorPicker />);
});

it('handles color change when custom picker is updated', () => {
  let baseColor = '#FFF', newColor = '#CCC';
  let onChange = (color) => {
    expect(color).toEqual(newColor);
  };
  let rectColorPicker = mount(<RectColorPicker color={baseColor} onChange={onChange} />);

  rectColorPicker.props().onChange(newColor);
});