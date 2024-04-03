//.map() method -> runs a function on each item on array, returns a new array

const colors = ["Blue", "Red", "Yellow", "Green", "Violet", "Orange", "Black"]

const small_letter = colors.map((small) => {
	return small.toUpperCase()
})

console.log(small_letter)


