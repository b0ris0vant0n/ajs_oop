import Zombie from '../zombie';

test('Правильно создаётся объект', () => {
	const zombie = new Zombie('Zombie');
    const correct = {
        attack: 40, defence: 10, level: 1, health: 100, name: 'Zombie', type: 'Zombie'
    }
	expect(zombie).toEqual(correct);
});