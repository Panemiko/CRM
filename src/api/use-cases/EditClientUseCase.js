import prisma from '@prismaClient'

export default class EditClientUseCase {
    async execute(clientId, clientEditedWithoutId) {
        const client = await prisma.client.update({
            where: {
                id: clientId,
            },
            data: {
                ...clientEditedWithoutId,
            },
        })

        return { code: 200, content: { client } }
    }
}
