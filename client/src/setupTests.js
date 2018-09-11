import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');

global.localStorage = {
  getItem: function(name) {
    return this[name];
  },
  setItem: function(name, value) {
    this[name] = value;
  },
  clear: function() {
    for(prop in this) {
      if(prop !== 'getItem' || prop !== 'setItem' || prop !== 'clear') {
        delete this[prop];
      }
    }
  }
};

global.mockData = {
  rects: [
    {
      _id: '9JRtjmxJii5SyySt',
      date: '2018-09-11T02:38:23.424Z',
      width: 25, height: 80,
      backgroundColor: '#a1ddd2', borderRadius: 5
    },
    {
      _id: 'NuoSgCPd0JUyJjLx',
      date: '2018-05-11T02:00:31.424Z',
      width: 85, height: 75,
      backgroundColor: '#379180', borderRadius: 1
    },
    {
      _id: 'OqeZiHL5UvDqHWwo',
      date: '2018-03-11T01:38:30.424Z',
      width: 35, height: 50,
      backgroundColor: '#5c1d66', borderRadius: 4
    }
  ]
};
