import React from 'react';
import { shallow, mount } from 'enzyme';
import RectEditor from './';

it('renders without crashing', () => {
  let rectEditor = shallow(<RectEditor />);
});

it('has state set from props', () => {
  let props = {width: 20, height: 10, backgroundColor: '#FFF', borderRadius: 0};
  let rectEditor = shallow(<RectEditor {...props} />);

  expect(rectEditor.state()).toEqual(props);
});

it('persists state as rect on save button click', () => {
  let props = {width: 20, height: 10, backgroundColor: '#FFF', borderRadius: 0};
  let mockResponse = JSON.stringify(Object.assign({_id: '9JRtjmxJii5SyySt'}, props));
  let onSave = function(rect) {
    expect(rect.id).toEqual(mockResponse['_id']);
  };
  let rectEditor = mount(<RectEditor {...props} onSave={onSave} />);
  let saveButton = rectEditor.find('button');

  fetch.mockResponse(mockResponse);
  saveButton.simulate('click');
});
