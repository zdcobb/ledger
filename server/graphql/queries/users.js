module.exports = {
    user: (_, args, context) => {
        console.debug(`Querying for user with ID: ${args.id}...`)
        return users.find((user) => String(user.id) === String(args.id))
    },
}
