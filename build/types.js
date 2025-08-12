"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
// CREAMOS LOS TIPOS DE CLIMA QUE VAMOS A MANEJAR
var Weather;
(function (Weather) {
    Weather["Sunny"] = "Sunny (Soleado)";
    Weather["Rainy"] = "Rainy (Lluvioso)";
    Weather["Cloudy"] = "Cloudy (Nublado)";
    Weather["Windy"] = "Windy (Ventoso)";
    Weather["Stormy"] = "Stormy (Tormenta)";
})(Weather || (exports.Weather = Weather = {}));
// CREAMOS LOS TIPOS DE VISIBILIDAD QUE VAMOS A MANEJAR
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "Great (Excelente)";
    Visibility["Good"] = "Good (Buena)";
    Visibility["Ok"] = "Ok";
    Visibility["Bad"] = "Bad (Mala)";
})(Visibility || (exports.Visibility = Visibility = {}));
