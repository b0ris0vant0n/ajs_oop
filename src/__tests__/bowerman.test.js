import Bowerman from '../bowerman';

test('Правильно создаётся объект', () => {
	const bowerman = new Bowerman('Bowerman');
    const correct = {
        attack: 25, defence: 25, level: 1, health: 100, name: 'Bowerman', type: 'Bowerman'
    }
	expect(bowerman).toEqual(correct);
});