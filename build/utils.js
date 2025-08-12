"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment...');
    }
    return commentFromRequest;
};
// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect of missing date...');
    }
    return dateFromRequest;
};
// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect of missing Weather');
    }
    return weatherFromRequest;
};
// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect of missing Visibility');
    }
    return visibilityFromRequest;
};
// AQUI SE VERIFICA QUE SI SEA UN DATO TIPO WEATHER
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
// AQUI SE VERIFICA QUE SI SEA UN DATO TIPO STRING
const isString = (string) => {
    return typeof string === 'string';
};
// VALIDAMOS SI ES DE TIPO FECHA
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// VALIDAMOS SI ES DE TIPO VISIBILITY
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
