import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas con <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Test';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('input').props().value).toBe(value);
    })

    test('no debe de mandar la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategory y limpiar la caja de texto', () => {
        const value = 'Test';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').props().value).toBe('');

    })
    

})
