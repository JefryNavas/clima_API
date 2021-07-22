const axios = require('axios');

const apiKey = "81e6edade17b1b48737d013e62184588";
const getClima = async(ciu) => {
    let res;
    let ciudad = encodeURI(ciu);
    try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
        const respuesta = await axios.get(url);
        let data = respuesta.data;
        let clima = data.weather;
        let tempe = data.main.temp;
        let humed = data.main.humidity;
        res = { clima: clima[0].main, temp: tempe, humedad: humed }

        return res;
    } catch (error) {
        return false;
    }


}
module.exports = { getClima }