const spawn = require('child_process').spawn;
const cp = spawn("node", ["alwaysSaying"])

cp.stdout.on('data', (data)=>{
	console.log(`STDOUT: ${data.toString()}`)
})

cp.on('close', ()=>{
	console.log('parent process ending...')
	process.exit()
})

setTimeout(()=>{
	cp.stdin.write('stop')
}, 5000)