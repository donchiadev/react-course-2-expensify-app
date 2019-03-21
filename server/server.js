const { join } = require('path')
const express = require("express")
const app = express()
const publicPath = join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('*', (request, response) => {
    response.sendFile(join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up!')
})