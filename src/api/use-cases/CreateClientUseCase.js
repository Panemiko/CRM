import prisma from '@prismaClient'

export default class CreateClientUseCase {
    async execute(clientSanitized) {
        const client = await prisma.client.create({
            data: {
                notes: '',
                ...clientSanitized,
            },
        })

        return { code: 201, content: { client } }
    }
}
