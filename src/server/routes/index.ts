import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
  return res.send('Olá Dev ... ')
})
router.post('/teste', (req, res) => {
  const { body } = req
  return res.json(body)
})

export { router }
