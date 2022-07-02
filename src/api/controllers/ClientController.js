import Controller from './Controller'
import CreateClientUseCase from '@api/use-cases/CreateClientUseCase'
import DeleteClientUseCase from '@api/use-cases/DeleteClientUseCase'
import EditClientUseCase from '@api/use-cases/EditClientUseCase'
import GetClientUseCase from '@api/use-cases/GetClientsUseCase'
import ClientInsetionValidator from '@api/validators/ClientInsetionValidator'

export default class ClientController {
    async execute(req, res) {
        const createClientUseCase = new CreateClientUseCase()
        const deleteClientUseCase = new DeleteClientUseCase()
        const editClientUseCase = new EditClientUseCase()
        const getClientsUseCase = new GetClientUseCase()
        const clientInsetionValidator = new ClientInsetionValidator()

        if (req.method === 'GET') {
            const page = req.query.page ? parseInt(req.query.page) : 0
            const query = req.query.query ? JSON.parse(req.query.query) : {}

            return Controller.handleResponse(
                res,
                await getClientsUseCase.execute(page, query)
            )
        } else if (req.method === 'POST') {
            const { client } = req.body
            const clientSanitized = await clientInsetionValidator.execute(
                client
            )

            if (!clientSanitized)
                return Controller.handleResponse(res, { code: 400 })

            return Controller.handleResponse(
                res,
                await createClientUseCase.execute(clientSanitized)
            )
        } else if (req.method === 'PUT') {
            const { id, client } = req.body
            const clientSanitized = await clientInsetionValidator.execute(
                client
            )

            if (!id) return Controller.handleResponse(res, { code: 400 })
            if (!clientSanitized)
                return Controller.handleResponse(res, { code: 400 })

            return Controller.handleResponse(
                res,
                await editClientUseCase.execute(id, clientSanitized)
            )
        } else if (req.method === 'DELETE') {
            const { id } = req.body
            if (!id) return Controller.handleResponse(res, { code: 400 })

            return Controller.handleResponse(
                res,
                await deleteClientUseCase.execute(id)
            )
        } else return Controller.handleResponse(req, { code: 405 })
    }
}
