import prisma from '@prismaClient'

export default class CreateClientUseCase {
    async execute(clientWithoutId) {
        const client = await prisma.client.create({
            data: {
                ...clientWithoutId,
            },
        })

        return { code: 201, content: { client } }
    }
}
