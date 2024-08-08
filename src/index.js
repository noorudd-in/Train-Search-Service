const express = require('express');
const {PORT} = require('./config/constants')

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

app.listen(PORT, () => {
    console.log(`Server is up and running on the port ${PORT}`)
})