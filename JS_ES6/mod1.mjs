let age = 23
let id_num = "4544H89"

function vote_qualify(age){
	let vote_status = ""

	if (age >= 18){
		console.log(`Voter of ID number ${id_num} has voted`)
		vote_status = "voted"
	}
	else{
		console.log("Age error: Cannot vote")
	}

	return vote_status;
}

vote_qualify(age)

export { age } 