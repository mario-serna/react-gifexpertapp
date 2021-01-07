import { getGifs } from '../../helpers/getGifs';
describe('Pruebas en getGif Fetch', () => {
    test('debe de traer 5 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(5);
    })

})
