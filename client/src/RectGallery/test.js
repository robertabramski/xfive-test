import React from 'react';
import { shallow, mount } from 'enzyme';
import RectGallery from './';

it('renders without crashing', () => {
  let rectGallery = shallow(<RectGallery />);
});

it('displays a list of item components by date, newest to oldest', () => {
  let rectGallery = shallow(<RectGallery rects={mockData.rects} />);
  let rectGalleryItems = rectGallery.find('.gallery').children();

  expect(rectGalleryItems.length).toEqual(mockData.rects.length);
});

it('removes a rect from database when item remove button is clicked', () => {
  let deletedRectId = mockData.rects[0]['_id'];
  let onRemove = (id) => {
    expect(deletedRectId).toEqual(id);
  };
  let rectGallery = mount(<RectGallery rects={mockData.rects} onRemove={onRemove} />);
  let rectGalleryItem = rectGallery.find('.gallery').childAt(0).childAt(0);
  let rectGalleryItemButton = rectGalleryItem.find('button');

  // TODO: Test error case when error handling is in place.
  fetch.mockResponse(JSON.stringify({success: 1}));
  rectGalleryItemButton.simulate('click');
});
