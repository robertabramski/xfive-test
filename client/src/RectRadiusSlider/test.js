import React from 'react';
import { shallow } from 'enzyme';
import RectRadiusSlider from './';

it('renders without crashing', () => {
  let rectRadiusSlider = shallow(<RectRadiusSlider />);
});

it('handles state change when slider is updated', () => {
  let radius = 5;
  let onChange = (borderRadius) => {
    expect(borderRadius).toEqual({borderRadius: radius * 2});
  };
  let rectRadiusSlider = shallow(<RectRadiusSlider borderRadius={radius} onChange={onChange} />);
  let slider = rectRadiusSlider.childAt(0);

  slider.props().onChange(radius * 2);
});
