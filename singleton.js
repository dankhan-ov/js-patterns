// Singleton - порождающий паттерн, гарантирующий, что у класса есть только 1 экземпляр.

// 2 подхода к созданию singleton:
// 1) Создать глобальную переменную, обращаться к ней; весь код завернуть в модуль 
// 2) Определить singleton внутри объекта


class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this
    return this;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    return instance.count++;
  }
};

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); // 4
console.log(myCount2.getCount()); // 4