require('dotenv').config();
const express = require('express');

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.send('api is running'))

app.listen(PORT, () => console.log(`server is running http://localhost:${PORT}`))
