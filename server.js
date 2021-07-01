const express = require('express')
const app = express()
const port = 3000
const secure = require("./middlewares/secure.js");

app.get('/:token', secure, (req, res) => res.send('Hello World!'))
app.use("/Users", secure )

 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
