const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
	prisma,
	// endpoints
	registerUser: async function (user) {
		return await prisma.user.create({
			data: { user },
		});
	},

	getUser: async function ({ id }) {
		return await prisma.user.find({
			where: { id },
		});
	},

	getUserLedgers: async function ({ id }) {
		return await prisma.ledger.find({
			where: { author_id: id },
		});
	},

	createLedger: async function ({ id, name }) {
		return await prisma.ledger.create({
			data: {
				author_id: id,
				name,
				pages: {
					create: {},
				},
			},
		});
	},

	getLedger: async function ({ id }) {
		return await prisma.ledger.find({
			where: { id },
			include: {
				pages: true,
			},
		});
	},
};
