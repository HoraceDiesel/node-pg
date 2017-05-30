function grab(flag) {
	var index = process.argv.indexOf(flag)

	return (index === -1) ? null : process.argv[index+1]
}

var user = grab('--user')
var greeting = grab('--greeting')

if (!user||!greeting) {
	console.log('no user') 
} else {
	console.log(`
		Welcome, ${user}
		${greeting}
	`)
}
