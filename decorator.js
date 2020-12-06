// Decorator - паттерн, с помощью которого можно добавлять объектам новые свойтва и методы


class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getModel() {
    return this.model;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'tesla';
  }
}

// декоратор autopilot
class Autopilot {
	constructor(car) {
		this.car = car;
  }

	getPrice() {
		return this.car.getPrice() + 5000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with autopilot`;
	}
}

// декоратор parktronic
class Parktronic {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 3000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with parktronic`;
	}
}


// версия с автопилотом и парктроником
let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getDescription()); 


// // создаем ауди на основе Car
class Audi extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.model = 'Audi';
  }
}

let audi = new Audi();
audi = new Parktronic(audi);
console.log(audi.getDescription())