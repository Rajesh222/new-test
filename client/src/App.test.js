import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('has main classname', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.main').length).toBe(1);
  });
});
