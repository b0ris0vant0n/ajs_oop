import Undead from '../undead';

test('Правильно создаётся объект', () => {
	const undead = new Undead('Undead');
    const correct = {
        attack: 25, defence: 25, level: 1, health: 100, name: 'Undead', type: 'Undead'
    }
	expect(undead).toEqual(correct);
});