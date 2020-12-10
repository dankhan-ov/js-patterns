// Bridge - порождающий паттерн, разделяющий 1 или более классов на несколько отдельных
// иерархий, позволяющий редактировать один в независимости от других

class Model {
	constructor(color) {
		this.color = color;
	}
};

class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
};

class BlackColor extends Color {
	constructor() {
		super("dark-black");
	}
};

class SilbrigColor extends Color {
	constructor() {
		super("Silbermetallic");
	}
};

class Audi extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Audi, Color: ${this.color.get()}`;
	}
};

class Bmw extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Auto: Bmw, Color: ${this.color.get()}`;
	}
};

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint())