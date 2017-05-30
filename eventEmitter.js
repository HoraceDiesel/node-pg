var Person = require('./lib/Person')

var ben = new Person('Ben Wallace')

ben.on('speak', function(said, status) {
	console.log(`${this.name} says: ${said} and he is ${status}`)
})

ben.emit('speak', "I'm a center!", "--Undrafted")