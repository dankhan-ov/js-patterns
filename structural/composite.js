// Composite - паттерн, позволяющий собрать объекты в древовидную структуру
// и работать с этой структурой, так, будто это один объект.
// Связи - ветки, компоненты - листья.

class Equipment {
  getPrice() {
    return this.price || 0
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name
  }
  setPrice(price) {
    this.price = price;
  }
};

// Части
class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
}

class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(3000);
	}
}

class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(4000);
	}
}


class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}

	add(equipment) {
		this.equipments.push(equipment);
	}

	getPrice() {
		return this.equipments
			.map(equipment => equipment.getPrice())
			.reduce((a, b) => a + b);
	}
}


class Car extends Composite {
	constructor(car) {
		super();
		this.setName(car);
	}
}

const myCar = new Car('Audi');
console.log(myCar);

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(myCar);
console.log(myCar.getPrice());