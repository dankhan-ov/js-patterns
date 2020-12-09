// Mediator - поведенческий паттерн, позволяющий уменьшить взаимосвязь классов между собой,
// вынося классы в класс "посредник"

class OfficialDealer {
  constructor() {
    this.customers = [];
  }
  
  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }
  
  addToCustomersList(name) {
    this.customers.push(name);
  }
  
  getCustomerList() {
    return this.customers;
  }
};

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }
     
  getName() {
    return this.name;
  }
     
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
};

const mediator = new OfficialDealer();

const vasya = new Customer('Vasiliy', mediator);
const danek = new Customer('Daniil', mediator);

vasya.makeOrder('Lada', 'With break pedal');
danek.makeOrder('Tesla', 'with extra battery');

console.log(mediator.getCustomerList());

