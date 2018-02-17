

const axios = require('axios');

let weather = [];
let searches = [];

function getWeather(state, city){
    let data = {}
    return axios.get('http://api.wunderground.com/api/'+process.env.WEATHER_API_KEY+'/forecast10day/q/'+state+'/'+city+'.json')
    .then(response => {
        searches.unshift(city)
       if (searches.length>3){
           searches.pop()
       } 
       const fiveDayForecast = response.data.forecast.simpleforecast.forecastday.slice(0,5);
       const filteredFiveDayForecast = fiveDayForecast.map((element, i) => {
           return {
               day: element.date.weekday,
               condition: element.conditions,
               high: element.high.fahrenheit,
               low: element.low.fahrenheit,
               icon: element.icon_url
           }
       }) 
       data.searches = searches;
       data.weather = filteredFiveDayForecast 
        return data;      
    })
}


module.exports = {
    read: (req, res) => {
        getWeather(req.params.state, req.params.city)
        .then(weather => {
            res.json(weather)
        })
    }
    
}

