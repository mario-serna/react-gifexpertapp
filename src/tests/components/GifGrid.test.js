import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas con <GifGrid />', () => {
    const category = 'Test';
    test('debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: '1',
            url: 'https://localhost/img.jpg',
            title: 'Test'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})
