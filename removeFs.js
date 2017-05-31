const fs = require('fs')

fs.readdirSync('./logs').map((fileName) => {
	fs.unlinkSync('./logs/' + fileName)
})

fs.rmdir('./logs', (err)=>{
	err ? console.log(err) : console.log('Directory removed')
})