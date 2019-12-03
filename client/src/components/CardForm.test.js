import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import CardForm from './CardForm';

describe('CardForm component', () => {
    it('has card-form classname', () => {
        const wrapper = mount(<CardForm />);
        expect(wrapper.find('.card-form').length).toBe(1);
    });

    it('HandleSubmit', () => {
        const onSubmit = jest.fn();
        const wrapper = mount(<CardForm />);
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

});
