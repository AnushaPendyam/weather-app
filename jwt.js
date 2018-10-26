const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());
const PORT = 8888;

const users = [
    {id: 1, username: "anusha", password: "superman"},
    {id: 2, username: "pendyam", password: "batman"}
];

app.get('/time', (req, res) => {
    const time = (new Date()).toLocaleTimeString();
    res.status(200).send(`The Time is ${time}`);
});
app.get("*", (req, res) => {
    res.sendStatus(404);
});
app.post("/login", (req, res) => {

    if(!req.body.username || !req.body.password){
        res.status(400).send('Please enter correct username and password')
    }
    const user = users.find((u)=>{

        const token = jwt.sign({
            sub: u.id,
            username: u.username
        }, "mykey", {expiresIn: "3 hours"});
        res.status(200).send({access_token: token});

        return u.username === req.body.username && u.password === req.body.password
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
