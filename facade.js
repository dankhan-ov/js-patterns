// Facade - паттерн, цель которого собрать разлчные сложные структуру, объединить их и 
// выдать простой способ манипуляции с ними.


class Сonveyor {

	setBody() {
		console.log('Body set!');
	}

	getEngine() {
        console.log('Dismantle Engine!');
    }

	setEngine() {
		console.log('Engine set!');
	}

	setInterior() {
		console.log('Interior added!');
	}

	changeInterior() {
		console.log('Update interior!');
	}

	setExterior() {
		console.log('Added exterior!');
	}

	setWheels() {
		console.log('Wheels!');
	}

	addElectronics() {
		console.log('Added electronics!');
	}

	paint() {
		console.log('Car painted!');
	}
}

class СonveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.setExterior();
		this.car.setWheels();
		this.car.addElectronics();
		this.car.paint();
  }
  
  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
}


const conveyor = new СonveyorFacade(new Сonveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();

console.log(car)