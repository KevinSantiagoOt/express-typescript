// CREAMOS LOS TIPOS DE CLIMA QUE VAMOS A MANEJAR
export enum Weather {
  Sunny = 'Sunny (Soleado)',
  Rainy = 'Rainy (Lluvioso)',
  Cloudy = 'Cloudy (Nublado)',
  Windy = 'Windy (Ventoso)',
  Stormy = 'Stormy (Tormenta)'
}

// CREAMOS LOS TIPOS DE VISIBILIDAD QUE VAMOS A MANEJAR
export enum Visibility {
  Great = 'Great (Excelente)',
  Good = 'Good (Buena)',
  Ok = 'Ok',
  Bad = 'Bad (Mala)'
}

// Creamos una interface
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather // ELIMINAR
  visibility: Visibility // CAMBIAR POR DONE
  comment: string
}

// Creamos una subinterface de DiaryEntry, ya que queremos utilizarlo con unas caracteristicas especificas, tenemos dos formas:
// 1. export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// 2.
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
