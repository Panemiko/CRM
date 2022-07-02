import Controller from './Controller'
import GetClientUseCase from '@api/use-cases/GetClientsUseCase'

export default class ClientController extends Controller {
    async execute(req, res) {
        if (req.method === 'GET') {
            const page = parseInt(req.query.page) || 0
            const query = JSON.parse(req.query.query) || {}

            return this.handleResponse(
                res,
                new GetClientUseCase().execute(page, query)
            )
        } else return this.handleResponse(req, { code: 405 })
    }
}
