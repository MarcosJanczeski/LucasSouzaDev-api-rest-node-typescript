import { server } from './server'

server.listen(process.env.PORT || 3030, () => console.log(`Rodando... na porta ${process.env.PORT || 3030}`))
