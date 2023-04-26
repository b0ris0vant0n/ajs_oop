export default class Character {
	constructor() {
		this.level = 1;
		this.health = 100;
		this.attack = undefined;
		this.defence = undefined;
	}

	levelUp() {
		if (this.health <= 0) {
			throw new Error('нельзя повысить левел умершего');
		} else {
			this.level += 1;
			this.attack = (this.attack * 0.2) + this.attack;
			this.defence = (this.defence * 0.2) + this.defence;
			this.health = 100;
		}
	}
}
