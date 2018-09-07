import React from 'react';
import { shallow } from 'enzyme';
import App from './';

beforeAll(() => {
  fetch.mockResponse(JSON.stringify(mockData.rects));
});

it('renders without crashing', () => {
  let app = shallow(<App />);
});

it('has a default state', () => {
  let app = shallow(<App />);

  expect(app.state()).toHaveProperty('width');
  expect(app.state()).toHaveProperty('height');
  expect(app.state()).toHaveProperty('backgroundColor');
  expect(app.state()).toHaveProperty('borderRadius');
});

it('can load state from localStorage', () => {
  let props = {
    width: 80,
    height: 47,
    backgroundColor: '#FF00FF',
    borderRadius: 3
  };

  // Set local storage before rendering.
  localStorage.setItem('styleProps', JSON.stringify(props));

  let app = shallow(<App />);

  expect(app.state()).toHaveProperty('width', props.width);
  expect(app.state()).toHaveProperty('height', props.height);
  expect(app.state()).toHaveProperty('backgroundColor', props.backgroundColor);
  expect(app.state()).toHaveProperty('borderRadius', props.borderRadius);
});

