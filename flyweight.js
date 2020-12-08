// Flyweight - структурный паттерн, позволяющий вместить большее количество определенных объектов 
// в выделенную оперативную память.

class Auto {
  constructor(model) {
    this.model = model;
  } 
};

class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.log('model');
    this.models[name] = new Auto(name);
    return this.models[name]; 
  }
  getModels() {
    console.table(this.models);
  }
};

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const lada = factory.create('LADA');
const mercedes = factory.create('Mercedes');
const tesla = factory.create('Tesla');

console.log(factory.getModels());