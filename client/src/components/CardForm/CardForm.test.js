import React from 'react';
import { mount, shallow } from 'enzyme';
import CardForm from './index';

describe('CardForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CardForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has card-form classname', () => {
    const wrapper = mount(<CardForm />);
    expect(wrapper.find('.card-form').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
