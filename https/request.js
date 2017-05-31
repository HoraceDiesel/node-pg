const https = require('https')
const fs = require('fs')

const options = {
	hostname: 'en.wikipedia.org',
	path: '/wiki/Node.js',
	method: 'GET',
	port: 443
}

let req = https.request(options, function(res) {
	let responseBody = ''

	console.log('Starting loading page...')
	console.log(`Server Status: ${res.statusCode}`)
	console.log("Response Header: %j", res.header)

	res.setEncoding('UTF-8')

	res.once('data', function(chunk) {
		console.log(`First chunk is: ${chunk}`)
	})

	res.on('data', function(chunk) {
		console.log(` -- chunk -- ${chunk.length}`)
		responseBody += chunk
	})

	res.on('end', function() {
		fs.writeFile('Node_Wiki.html', responseBody, function(err) {
			if (err) {
				throw err
			} else {
				console.log('Finished downloading page')
			}
		})
	})
})

req.on('error', function(err) {
	console.log(`Problem occurs ${err.message}`)
})

req.end()
