export default class Character {
	constructor(name, type) {
		const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

		if (name.length < 2 || name.length > 10) {
			throw new Error('Имя должно содержать от 2 до 10 символов');
		} else {
			this.name = name;
		};

		if (!types.includes(type)) {
			throw new Error('Неизвестное существо');
		} else {
			this.type = type;
		};

		this.level = 1;
		this.health = 100;
		this.attack = undefined;
		this.defence = undefined;
	};

	levelUp() {
		if (this.health <= 0) {
			throw new Error('нельзя повысить левел умершего');
		} else {
			this.level += 1;
			this.attack = (this.attack * 0.2) + this.attack;
			this.defence = (this.defence * 0.2) + this.defence;
			this.health = 100;
		};
	};
}
