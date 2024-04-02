/**
 * Represents a Car object.
 */
class Car {
  /**
   * Creates a new Car instance.
   * @param {string} name - The name of the car.
   * @param {string} color - The color of the car.
   * @param {string} year_of_man - The year the car was manufactured.
   */
  constructor(name, color, year_of_man) {
    this.name = name;
    this.color = color;
    this.year_of_man = year_of_man;
  }

  /**
   * Prints the information about the car.
   */
  printCarInfo() {
    console.log(
      ` Jake owns this car: ${this.name}, ${this.color} in color, and made in ${this.year_of_man}`
    );
  }
}
/**
 * Creates a new Car object and prints its information.
 */
const first_car = new Car("Subaru Outback", "Red", "2018");
first_car.printCarInfo();
console.log(typeof first_car);

//EXTENDING a Class

/**
 * Represents an Electric Car object, which inherits from the Car class.
 */

class ElectricCar extends Car {
  /**
   * Creates a new ElectricCar instance.
   * @param {string} name - The name of the electric car.
   * @param {string} color - The color of the electric car.
   * @param {string} year_of_man - The year the electric car was manufactured.
   * @param {number} batteryCapacity - The battery capacity of the electric car (in kWh).
   */

  constructor(name, color, year_of_man, batteryCapacity) {
    super(name, color, year_of_man);
    this.batteryCapacity = batteryCapacity;
  }
  /**
   * Prints the information about the electric car.
   */
  printEectricCarInfo() {
	console.log(`Jake owns this e-car ${this.name} of battery capacity: ${this.batteryCapacity}`);
  }
}


/**
 * Creates a new ElectricCar object and prints its information.
 */

const elect_Car = new ElectricCar("Tesla", "Blue", "2024", "60 kw");

elect_Car.printEectricCarInfo()

