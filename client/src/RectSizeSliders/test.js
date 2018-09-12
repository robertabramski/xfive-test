import React from 'react';
import { shallow } from 'enzyme';
import RectSizeSliders from './';

it('renders without crashing', () => {
  let rectSizeSliders = shallow(<RectSizeSliders />);
});

it('handles width change when slider is updated', () => {
  let width = 20;
  let onChange = (props) => {
    expect(props).toHaveProperty('width', width * 2);
  };
  let rectSizeSliders = shallow(<RectSizeSliders width={width} onChange={onChange} />);
  let slider = rectSizeSliders.find('.width');

  slider.props().onChange(width * 2);
});

it('handles height change when slider is updated', () => {
  let height = 20;
  let onChange = (props) => {
    expect(props).toHaveProperty('height', height * 2);
  };
  let rectSizeSliders = shallow(<RectSizeSliders height={height} onChange={onChange} />);
  let slider = rectSizeSliders.find('.height');

  slider.props().onChange(height * 2);
});
