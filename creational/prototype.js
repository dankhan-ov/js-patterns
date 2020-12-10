// Prototype - порождающий паттерн, позволяющий копировать объекты не вдаваясь в подробности их реализации.


class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

// прототип
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// производство
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// редактирование свойств ондого из объектов  
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);