import React from 'react';
import { mount, shallow } from 'enzyme';
import CardList from './index';

describe('CardList component', () => {
    it('renders correctly', () => {
        const allCardList = [];
        const wrapper = shallow(<CardList allCardList={allCardList} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('has list classname', () => {
        const allCardList = [];
        const wrapper = shallow(<CardList allCardList={allCardList} />);
        expect(wrapper.find('.list').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have eqaual number of credit card number record', () => {
        const allCardList = [{
            id: 1,
            name: 'test',
            cardNumber: '123',
            limit: 1000,
            balance:100
        }];
        const wrapper = shallow(<CardList allCardList={allCardList} />);
        expect(wrapper.find('.card-list').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });

});
