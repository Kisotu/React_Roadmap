// allow us to write shorter function syntax
// function hello(){
// 	console.log("Hello there");
// }
// hello() can be written as >>> 
hello = () => console.log("Hello there")
hello()


//or 

hello1 = () => {
	console.log("Hello there again")
}
hello1()


// with args
greet = (username)  => {
	console.log(`Hello there ${username}`)
}
greet("Jake")

findProduct = (x, y) => {
	return x * y;
}

product = findProduct(5, 7)
console.log(`The product between  x and y is ${product}`)