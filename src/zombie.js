import Character from './character';

export default class Zombie extends Character {
	constructor(level, health) {
		super(level, health);

		this.attack = 40;

		this.defence = 10;
	}
}
