// Iterator - поведенческий паттерн, "предок" итераторов es6+

class Iterator {
	constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

const autos = {
  BMW: {model: 'BMW', color: 'black', price: '20000'},
  Tesla: {model: 'Tesla', color: 'white', price: '30000'},
  Toyota: {model: 'Toyota', color: 'brown', price: '40000'},
}

const collection = new Iterator(autos);

while(collection.hasNext()) {
  console.log(collection.next());
};


class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};