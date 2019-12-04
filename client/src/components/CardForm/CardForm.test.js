import React from 'react';
import { mount } from 'enzyme';
import CardForm from './index';

describe('CardForm component', () => {
  it('renders correctly', () => {
    const wrapper = mount(<CardForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has card-form classname', () => {
    const wrapper = mount(<CardForm />);
    expect(wrapper.find('.card-form').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
