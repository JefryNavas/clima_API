const { getClima } = require("./controlador/clima")
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }

}).argv;
let ciudad = argv.ciudad;

getClima(ciudad).then(res => console.log(`La temperatura en ${ciudad} es de : ${res}`)).catch(err => console.log(err));