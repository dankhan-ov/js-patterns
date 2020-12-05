// Factory Method - паттерн, позволяющий создавать множество однотипных объектов 
// с одинаковой структурой и разными данными

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300);
    if (type === 'X6') return new Bmw(type, 110000, 320);
  }
};

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');