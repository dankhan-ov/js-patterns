// Builder - паттерн, используемые для создания объектов со сложными состояниями,
// позволяет создать ралиные конфигурации объектов, не засоряя исходный конструктор
// дополнительной логикой


class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this; 
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this; 
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this; 
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this; 
  }

  build() {
    return this.car;
  }
}


const myCar1 = new CarBuilder()
                    .addAutoPilot(true)
                    .addParktronic(true)
                    .updateEngine('V8')
                    .build();

const myCar2 = new CarBuilder()
                    .addSignaling(true)
                    .updateEngine('V4')
                    .build();

                  
console.log(myCar1);
console.log(myCar2)