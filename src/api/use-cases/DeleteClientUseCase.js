import prisma from '@prismaClient'

export default class DeleteClientUseCase {
    async execute(clientId) {
        await prisma.client.delete({
            where: {
                id: clientId,
            },
        })

        return { code: 200 }
    }
}
