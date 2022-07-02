import Controller from './Controller'
import GetClientUseCase from '@api/use-cases/GetClientsUseCase'
import CreateClientUseCase from '@api/use-cases/CreateClientUseCase'

export default class ClientController {
    async execute(req, res) {
        if (req.method === 'GET') {
            const page = req.query.page ? parseInt(req.query.page) : 0
            const query = req.query.query ? JSON.parse(req.query.query) : {}

            return Controller.handleResponse(
                res,
                await new GetClientUseCase().execute(page, query)
            )
        } else if (req.method === 'POST') {
            const client = req.body.client
            if (client.id) delete client.id

            return Controller.handleResponse(
                res,
                await new CreateClientUseCase().execute(client)
            )
        } else return Controller.handleResponse(req, { code: 405 })
    }
}
