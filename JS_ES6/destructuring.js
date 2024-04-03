const vehicles = ["defender", "landcruizer", "subaru", "G-63", "Hummer", "Tesla"]

const [car, truck, suv, hatchback, , ] = vehicles;

console.log(car)

//comes in handy when a function returns an array

calculator = (a, b) => {
	const add = a + b
	const subtract = a - b
	const multiply = a * b
	const divide = a / b

	return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide ] = calculator(8, 2)

console.log("Add : " + add)
console.log("Subtract : " + subtract)
console.log("Multiply : " + multiply)
console.log("Divide : " + divide)

// passing an object to a function using destructuring

const vehicles1 = {
	brand : "Tesla",
	model : "Y",
	yom : 2022,
	color: "red"
}
myfunction = ({brand, model, yom}) => {
	console.log(`My name is Jake and my car is  a ${brand}, it is model ${model} and was made in ${yom}`);
}

myfunction(vehicles1)

//destructuring nested objects

const counties = {
	county: "Kiambu",
	population: 6000000,
	city: true,
	town : {
		thika: "Capital",
		governor: "Wamatangi",
		climate: "hot-dry",
	}
}

townInfo = ({county, population, town: {governor, climate}}) => {
	console.log(`${county} is a county in Kenya. Its governor is ${governor} and is a ${climate} palce`);
}
townInfo(counties)