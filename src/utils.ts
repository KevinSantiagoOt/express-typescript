import { NewDiaryEntry, Done } from './types'

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

// ________________________________________________________________________________________________________________________________________________
// PARCEAMOS PARA VERIFICAR EL DATO DE ENTRADA
const parseDone = (doneFromRequest: any): Done => {
  if (!isBool(doneFromRequest)) {
    throw new Error('Incorrect of missing Done')
  }

  return doneFromRequest
}

// ________________________________________________________________________________________________________________________________________________
// VERIFICAMOS SI EL DATO DE ENTRADA ES BOOLEAN
const isBool = (valor: any): boolean => {
  return typeof valor === 'boolean'
}

// AQUI SE VERIFICA QUE SI SEA UN DATO TIPO STRING
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

// VALIDAMOS SI ES DE TIPO FECHA
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

// ________________________________________________________________________________________________________________________________________________
// VALIDAMOS SI ES DE TIPO DONE

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    done: parseDone(object.done)
  }

  return newEntry
}

export default toNewDiaryEntry
