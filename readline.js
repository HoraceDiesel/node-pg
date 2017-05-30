const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
  output: process.stdout
})

let person = {
	name: '',
	sayings: []
}

rl.question('What is your name? > ', (answer) => {

	person.name = answer
	rl.setPrompt(`What does ${person.name} say? > `)
	rl.prompt()

	rl.on('line', function(saying){
		person.sayings.push(saying.trim())

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close()
		} else {
			rl.setPrompt(`What else does ${person.name} say?`)
			rl.prompt()
		}

	})

})

rl.on('close', function(){
	console.log("%s is saying %j", person.name, person.sayings)
	process.exit()
})

