import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types' // Aqui importamos de las demas clases
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, done }) => {
    return {
      id,
      date,
      done
    }
  }).sort((a, b) => Number(b.done) - Number(a.done)) // ESTA LINEA ME ORDENA LOS DATOS POR DONE _________________________________
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

// ELIMINAR POR ID
export const deleteById = (id: number): boolean => {
  const index = diaries.findIndex(d => d.id === id)
  if (index !== -1) {
    diaries.splice(index, 1)
    return true
  } else {
    return false
  }
}
