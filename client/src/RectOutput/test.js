import React from 'react';
import { shallow } from 'enzyme';
import RectOutput from './';

it('renders without crashing', () => {
  let rectOutput = shallow(<RectOutput />);
});

it('displays output changes when props change', () => {
  let width = 20, height = 50, backgroundColor = '#CCC', borderRadius = 0;
  let rectOutput = shallow(
    <RectOutput
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius} />
  );

  testExpectation();

  width = 60, height = 90, backgroundColor = '#FFF', borderRadius = 5;

  let props = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius
  };

  rectOutput.setProps(props, testExpectation);

  function testExpectation() {
    let outputDiv = rectOutput.children();

    expect(rectOutput.children().props().style).toHaveProperty('width', width);
    expect(rectOutput.children().props().style).toHaveProperty('height', height);
    expect(outputDiv.props().style.backgroundColor).toEqual(backgroundColor);
    expect(outputDiv.props().style.borderRadius).toEqual(borderRadius);
  }
});
