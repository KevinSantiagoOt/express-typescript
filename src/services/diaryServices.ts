import fs from 'fs'
import path from 'path'
import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  NewDiaryEntry
} from '../types' // Aqui importamos de las demas clases
// import diaryData from '../../database.json'
const database = path.resolve(__dirname, '../../', 'data/database.json')
console.log('database:', database)

const diaries: DiaryEntry[] = [] // diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

// _____ GUARDAR CAMBIOS
const save = (): void => {
  fs.writeFile(database, JSON.stringify(diaries), (err) => {
    if (err !== null) {
      console.error('Error al guardar el archivo', err)
      return
    }
    console.log('Archivo guardado exitosamente')
  })
}

const read = (): void => {
  fs.readFile(database, 'utf8', (err, datos) => {
    if (err !== null) {
      console.error('Error al leer el archivo:', err)
      return
    }
    console.log('Contenido del archivo:\n', datos)
    const diariesData = JSON.parse(datos) as DiaryEntry[]
    diariesData.map((item) => diaries.push(item))
  })
}
read()

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries
      .map(({ id, date, done }) => {
        return {
          id,
          date,
          done
        }
      })
      .sort((a, b) => Number(b.done) - Number(a.done)) // ESTA LINEA ME ORDENA LOS DATOS POR DONE _________________________________
  }

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  save()
  return newDiary
}

// ELIMINAR POR ID
export const deleteById = (id: number): boolean => {
  const index = diaries.findIndex((d) => d.id === id)
  if (index !== -1) {
    diaries.splice(index, 1)
    save()
    return true
  } else {
    return false
  }
}

export const patchById = (id: number): DiaryEntry | null => {
  const index = diaries.findIndex((d) => d.id === id)
  if (index !== -1) {
    diaries[index].done = !diaries[index].done
    save()
    return diaries[index]
  } else {
    return null
  }
}
