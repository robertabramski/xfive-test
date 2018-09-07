import React from 'react';
import { shallow } from 'enzyme';
import RectGalleryItem from './';

let styleProps = null;

beforeAll(() => {
  styleProps = {
    width: 30,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 2
  };
});

it('renders without crashing', () => {
  let rectGalleryItem = shallow(<RectGalleryItem />);
});

it('accepts style props and displays them', () => {
  let rectGalleryItem = shallow(<RectGalleryItem styleProps={styleProps} />);
  let rectDiv = rectGalleryItem.find('div');

  expect(rectDiv.props().style).toEqual(styleProps);
});

it('passes the rect id when the remove button is clicked', () => {
  let propId = 'OqeZiHL5UvDqHWwo';
  let onRemove = (id) => {
    expect(id).toEqual(propId);
  };
  let rectGalleryItem = shallow(
    <RectGalleryItem id={propId} styleProps={styleProps} onRemove={onRemove} />
  );
  let removeButton = rectGalleryItem.find('button');

  removeButton.simulate('click');
});
