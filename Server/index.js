const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const users = [
    { id: 1, name: 'shamim', email: 'shamim@gamil.com' },
    { id: 2, name: 'mim', email: 'mim@gamil.com' },
    { id: 3, name: 'sha', email: 'sham@gamil.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management server is running')
})

app.get('/users', (req, res)=>{
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`)
})