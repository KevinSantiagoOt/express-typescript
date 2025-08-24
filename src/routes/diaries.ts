import express from 'express'
import toNewDiaryEntry from '../utils'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('ERROR...')
    }
  }
})

router.patch('/:id', (req, res) => {
  const id = +req.params.id
  const patchDiary = diaryServices.patchById(id)

  if (patchDiary !== null) {
    res.status(200).send(patchDiary)
  } else {
    res.status(404).send('ERROR...')
  }
})

// _______________________________________________________________________________________________
router.delete('/delete/:id', (req, res) => {
  const id = +req.params.id
  const deleteDiary = diaryServices.deleteById(id)

  if (deleteDiary) {
    res.status(204).end()
  } else {
    res.status(404).send('ERROR...')
  }
})

export default router
