const express = require("express")
const app = express();

app.get('/express', (req, res)=>{
    res.send('<h1>hello server!!</h1>')
})

app.get('/:ingoo', (req, res) => {
    let name = req.params.ingoo
    res.send(`<h1>hello ${name}</h1>`)
});

app.listen(3000, () => {
    console.log('server onload');
})