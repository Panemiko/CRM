import prisma from '@prismaClient'

export default class EditClientUseCase {
    async execute(clientId, clientEditedSanitized) {
        const client = await prisma.client.update({
            where: {
                id: clientId,
            },
            data: {
                ...clientEditedSanitized,
            },
        })

        return { code: 200, content: { client } }
    }
}
