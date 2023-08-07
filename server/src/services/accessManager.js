const { verifyToken } = require('../services/tokenManager');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.verifyAccess = async(res, token, id, mustBeAdmin = true) => {
    const payload = await verifyToken(token);
    const userId = payload.id;
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (mustBeAdmin && user.role !== 'ADMIN') {
        return res.status(401).json({ msg: 'You haven\'t the rights.' });
    } else if (user.id !== userId) {
        return res.status(401).json({ msg: 'Your session is invalid.' });
    }
    return user;
}