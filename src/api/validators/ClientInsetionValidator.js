export default class ClientInsetionValidator {
    async execute(client) {
        if (client.id) delete client.id
        if (client.createdAt) delete client.createdAt
        if (client.updatedAt) delete client.updatedAt

        return client
    }
}
