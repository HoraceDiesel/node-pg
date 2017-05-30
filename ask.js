const questions = [
	"What is your name?",
	"What is your fav hobby?",
	"what is your fav language?"
]

let answers = []

function ask(index) {
	process.stdout.write("\n\n\n")
	process.stdout.write(questions[index] + "  >   ")
}

process.stdin.on("data", function(data){
	answers.push(data.toString().trim())

	if (answers.length < questions.length) {
		ask(answers.length)
	} else {
		process.exit()
	}

})

process.on("exit", function(){
	process.stdout.write(`Go ${answers[1]}, ${answers[0]}! You can write ${answers[2]} later \n`)
})

ask(0)