import Magician from '../magician';

test('Правильно создаётся объект', () => {
	const magician = new Magician('Magician');
    const correct = {
        attack: 10, defence: 40, level: 1, health: 100, name: 'Magician', type: 'Magician'
    }
	expect(magician).toEqual(correct);
});