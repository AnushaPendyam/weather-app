let request = require('request');
const argv = require('yargs').argv;

let apiKey = '22f45fbadb4d0bd1bb3f29e563e8ea10';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
})
