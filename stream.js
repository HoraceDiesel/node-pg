const fs = require('fs')

const stream = fs.createReadStream('./chat/chat.log', 'UTF-8')
let data = ""

stream.once('data', function() {
	console.log("\n\n\n")
	console.log('Starting reading file...')
	console.log("\n\n\n")
})

stream.on('data', function(chunk) {
	process.stdout.write(`Read: ${chunk.length} | `)
	data += chunk
})

stream.on('end', function() {
	console.log("\n\n\n")
	console.log('Finished reading file' + data.length)
	console.log("\n\n\n")
})