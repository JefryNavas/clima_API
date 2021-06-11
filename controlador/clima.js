const axios = require('axios');

const apiKey = "81e6edade17b1b48737d013e62184588";

const getClima = async(ciudad) => {
    try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
        const respuesta = await axios.get(url);
        return respuesta.data.main.temp;
    } catch (error) {
        console.log(error.data);
    }


}
module.exports = { getClima }