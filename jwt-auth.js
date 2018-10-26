const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressjwt = require("express-jwt");
const PORT = process.env.API_PORT || 8888;
app.use(bodyParser.json());

const jwtCheck = expressjwt({
    secret: "mykey"
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});
app.get("/asset", (req, res) => {
    res.status(200).send("Everybody can see this");
});
app.get("/asset/secret", jwtCheck, (req, res) => {
    res.status(200).send("Only logged in people can see me");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
