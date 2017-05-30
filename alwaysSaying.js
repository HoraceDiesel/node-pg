const sayings = [
	"Degree and/or tertiary education in related discipline",
	"A portfolio demonstrating knowledge and experience with web based technologies",
	"2+ years commercial experience (mid Level)",
	"Solid and demonstrable, commercial experience in producing CSS",
	"Experience with a CSS preprocessor like SASS",
	"Experience working in an Agile Environment ideal",
	"Demonstrably strong stakeholder engagement",
	"management skills, with the ability to work with both technical and business stakeholders",
	"Outstanding communication skills both written and verbal"
]

const getRandomItem = (items) => {
	let i = Math.floor(Math.random() * items.length)
	return items[i]
}

setInterval(()=>{
	process.stdout.write(getRandomItem(sayings) + "\n")
}, 1000)

process.stdin.on("data", ()=>{
	clearInterval()
	console.log(`Command received, ending process...`)
	process.exit()
})