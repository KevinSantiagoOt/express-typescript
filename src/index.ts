// EN INDEX SIEMPRE ESTA EL CÓDIGO FUENTE

import express from 'express' // Importamos Express
import diaryRoutes from './routes/diaries'

const app = express() // Creamos una aplicación con Express
app.use(express.json()) // Le decimos a nuestra app que va a usar express.jason que transforma la req.body a un json

const PORT = 3000 // Le indicamos a que puerto se va a levantar el servidor

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!')
  res.send('pongg')
})

app.use('/api/diaries', diaryRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
