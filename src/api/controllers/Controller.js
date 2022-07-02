export default class Controller {
    static async handleResponse(res, { code, content }) {
        if (!content) return res.status(code).end()
        else return res.status(code).json(content)
    }
}
