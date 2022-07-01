import prisma from '@prismaClient'

export default async function CreateClient(req, res) {
    if (req.method !== 'POST') return res.status(403).end()

    delete req.body.id

    const client = await prisma.client.create({
        data: {
            ...req.body,
        },
    })

    return res.status(201).json({ client })
}
