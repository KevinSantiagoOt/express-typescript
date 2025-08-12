import { NewDiaryEntry, Weather, Visibility } from './types'

// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment...')
  }

  return commentFromRequest
}

// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect of missing date...')
  }

  return dateFromRequest
}

// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
export const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect of missing Weather')
  }

  return weatherFromRequest
}

// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect of missing Visibility')
  }

  return visibilityFromRequest
}

// AQUI SE VERIFICA QUE SI SEA UN DATO TIPO WEATHER
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

// AQUI SE VERIFICA QUE SI SEA UN DATO TIPO STRING
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

// VALIDAMOS SI ES DE TIPO FECHA
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

// VALIDAMOS SI ES DE TIPO VISIBILITY
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
