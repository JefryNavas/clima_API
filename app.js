const { getClima } = require("./controlador/clima")
const colors = require("colors")
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }

}).argv;
let ciudad = argv.ciudad;

getClima(ciudad).then(res => {
    if (res) {
        console.log("***************************************".magenta);
        console.log(`Ciudad: ${ciudad}`.green);
        if (res.clima == "Clouds") console.log(`Clima: ${res.clima}`.grey);
        if (res.clima == "Rain") console.log(`Clima: ${res.clima}`.blue);
        if (res.clima == "Clear") console.log(`Clima: ${res.clima}`.yellow);
        if (res.temp >= "27") console.log(`La temperatura es de : ${res.temp}`.yellow);
        if (res.temp < "27") console.log(`La temperatura es de : ${res.temp}`.blue);
        console.log(`La humedad es de : ${res.humedad}`);
        console.log("***************************************".magenta);
    } else console.log("Ciudad no Encontrada".red);
});