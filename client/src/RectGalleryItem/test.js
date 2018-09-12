import React from 'react';
import { shallow, mount } from 'enzyme';
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
  let rectGalleryItem = mount(<RectGalleryItem styleProps={styleProps} />);
  let rectOutputDiv = rectGalleryItem.find('.output');
  let outputDivStyleProps = rectOutputDiv.props().style;

  expect(outputDivStyleProps.width).toEqual(styleProps.width);
  expect(outputDivStyleProps.height).toEqual(styleProps.height);
  expect(outputDivStyleProps.backgroundColor).toEqual(styleProps.backgroundColor);
  expect(outputDivStyleProps.borderRadius).toEqual(styleProps.borderRadius);
});

it('passes the rect id when the remove button is clicked', () => {
  let propId = 'OqeZiHL5UvDqHWwo';
  let onRemove = (id) => {
    expect(id).toEqual(propId);
  };
  let rectGalleryItem = mount(
    <RectGalleryItem id={propId} styleProps={styleProps} onRemove={onRemove} />
  );
  let removeButton = rectGalleryItem.find('button');

  removeButton.simulate('click');
});
