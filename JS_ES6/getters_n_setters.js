/**
 * Represents a person with a first name and age.
 * @property {string} _first_name - The person's first name.
 * @property {number} _age - The person's age.
 */
const person = {
  /**
   * The person's first name.
   * @type {string}
   * @private
   */
  _first_name: "James",
  /**
   * The person's age.
   * @type {number}
   * @private
   */
  _age: 56,

  /**
   * Getter for the person's first name.
   * @returns {string} The person's first name.
   */
  get first_name() {
    return this._first_name;
  },
  /**
   * Getter for the person's age.
   * @returns {number} The person's age.
   */
  get age() {
    return this._age;
  },
  /**
   * Setter for the person's first name.
   * @param {string} new_name - The new first name for the person.
   * @throws {Error} If the new first name is an empty string.
   */
  set first_name(new_name) {
    if (new_name != "") {
      this._first_name = new_name;
    } else {
      console.log("Error: first name cannnot be empty");
    }
  },
  /**
   * Setter for the person's age.
   * @param {number} new_age - The new age for the person.
   * @throws {Error} If the new age is 0 or less.
   */
  set age(new_age) {
    if (new_age > 0) {
      this._age = new_age;
    } else {
      console.log("Error: age NOT changed, age cannot be 0");
    }
  },
};
/**
 * Logs the person's name and age to the console.
 */
console.log(`My name is ${person.first_name} and I am ${person.age} years old`);

/**
 * Attempts to set the person's age to 0, which should log an error message.
 */
person.age = 0;
console.log(person.age);
/**
 * Sets the person's first name to "Karura" and logs the new name to the console.
 */
person.first_name = "Karura";
console.log(person.first_name);
