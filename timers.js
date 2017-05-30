const waitTime = 3000
const waitInterval = 10
let currentTime = 0
let percent = 0

const getPercent = (p) => {
	process.stdout.clearLine()
	process.stdout.cursorTo(0)
	process.stdout.write(`waiting... ${p}%`)
}

const interval = setInterval(function(){
	currentTime += waitInterval
	percent = Math.floor(currentTime/waitTime * 100)
	getPercent(percent)
}, waitInterval)

setTimeout(function(){
	clearInterval(interval, waitTime)
	getPercent(100)
	console.log("\ndone \n\n")
}, waitTime)

process.stdout.write("\n\n")
getPercent(percent)