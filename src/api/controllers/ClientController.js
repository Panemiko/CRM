import Controller from './Controller'
import GetClientUseCase from '@api/use-cases/GetClientsUseCase'
import CreateClientUseCase from '@api/use-cases/CreateClientUseCase'
import EditClientUseCase from '@api/use-cases/EditClientUseCase'
import DeleteClientUseCase from '@api/use-cases/DeleteClientUseCase'

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
            const { client } = req.body

            if (!client) return Controller.handleResponse(res, { code: 400 })
            if (client.id) delete client.id

            return Controller.handleResponse(
                res,
                await new CreateClientUseCase().execute(client)
            )
        } else if (req.method === 'PUT') {
            const { id, client } = req.body

            if (!id) return Controller.handleResponse(res, { code: 400 })
            if (!client) return Controller.handleResponse(res, { code: 400 })

            delete client.id

            return Controller.handleResponse(
                res,
                await new EditClientUseCase().execute(id, client)
            )
        } else if (req.method === 'DELETE') {
            const { id } = req.body
            if (!id) return Controller.handleResponse(res, { code: 400 })

            return Controller.handleResponse(
                res,
                await new DeleteClientUseCase().execute(id)
            )
        } else return Controller.handleResponse(req, { code: 405 })
    }
}
