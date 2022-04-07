const express = require('express')
const server = express();

const port = process.env.PORT || 0

// const port = 5000

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(port, ()=>{console.log(`24/7 web server started!, Your app is listening a http://localhost:${port}`)

});
}
module.exports = keepAlive
