import prisma from '@prismaClient'

export default class GetClientUseCase {
    async execute(page, clientQuery) {
        const clients = await prisma.client.findMany({
            where: {
                ...clientQuery,
            },
            take: 50,
            skip: page * 50,
            orderBy: {
                name: 'asc',
            },
        })

        return { code: 200, content: { clients } }
    }
}
