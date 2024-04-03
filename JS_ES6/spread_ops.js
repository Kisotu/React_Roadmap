// allows to quickly copy all or part fo an existing aaray or object into another array or object
const num1 = [1, 2, 4]
const num2 = [3, 5, 6]

const comb = [...num1, ...num2]

console.log(comb)

// obj
const cities1 = {
	Kiambu: "Wamatangi",
	Nairobi: "Sakaja",
	Narok: "Ntutu"
}

const cities2 = {
	Nakuru: "Kihiks",
	Bomet: "Barchok",
	kericho: "Mutai"
}

const comb1 = {...cities1, ...cities2}

console.log(comb1)