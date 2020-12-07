// Proxy - паттерн, структурный паттерн, предоставляющий специальные объекты-заменители для запросов
// вместо реальных объектов

class CarAccess {
  open() {
    console.log('Open car door')
  }
  close() {
    console.log('close car door')
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');  
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close(); 
  }
}

const door = new SecuritySystem(new CarAccess());

door.open('Jack');
door.open('Ilon');
door.close();