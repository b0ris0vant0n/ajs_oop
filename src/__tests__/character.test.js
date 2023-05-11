import Character from '../character';
import Daemon from '../daemon';

test('test class for Character', () => {
	const anyUser = new Character('Bowerman', 'Bowerman');
	const correct = {
		attack: undefined, defence: undefined, level: 1, health: 100, name: 'Bowerman', type: 'Bowerman'
	}
	expect(anyUser).toEqual(correct);
});

test('test class Character with invalid value of name', () => {
	expect(() => {
	  const character = new Character('Abracadabraa', 'Daemon', 40, 20);
	  return character;
	}).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
  });
  
test('test class Character with invalid value of type', () => {
	expect(() => {
	  const character = new Character('Anton', 'Batman', 40, 20);
	  return character;
	}).toThrow(new Error('Неизвестное существо'));
  });

test('test class for levelUp function', () => {
	const anyUser = new Character('Bowerman', 'Bowerman');
	anyUser.attack = 25;
	anyUser.defence = 25;
	anyUser.health = 50;
	anyUser.levelUp();
	expect(anyUser).toEqual({
		attack: 30, defence: 30, level: 2, health: 100, name: 'Bowerman', type: 'Bowerman'
	});
});

test('test class for levelUp function for dead Character', () => {
	const anyUser = new Character('Bowerman', 'Bowerman');
	anyUser.health = 0;

	expect(() => {
		anyUser.levelUp();
	}).toThrow();
});

test('test class for damage function', () => {
	const  anyUser = new Daemon('VV', 'Daemon');
	anyUser.damage(10);

	expect(anyUser).toEqual({
		name: 'VV', type: 'Daemon', health: 94, level: 1, attack: 10, defence: 40,
	})
	
})

test('test class for damage function if health < 0', () => {
	const  anyUser = new Daemon('VV', 'Daemon');
	anyUser.health = -1;
	anyUser.damage(10);
	expect(anyUser).toEqual({
		name: 'VV', type: 'Daemon', health: -1, level: 1, attack: 10, defence: 40,
	})
	
})