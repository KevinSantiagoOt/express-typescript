// CREAMOS LOS TIPOS DE VISIBILIDAD QUE VAMOS A MANEJAR
export type Done = boolean

// Creamos una interface
export interface DiaryEntry {
  id: number
  date: string
  done: Done
  comment: string
}

// Creamos una subinterface de DiaryEntry, ya que queremos utilizarlo con unas caracteristicas especificas, tenemos dos formas:
// 1. export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'done'>
// 2.
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// ______________________________________________________________________
