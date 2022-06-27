module.exports = {
    registerUser: async (_, { newUser }, prisma) => {
        try {
            console.debug('Registering new user: ', newUser)
            const registeredUser = await prisma.user.create(newUser)
            console.log('User properly registered!')
            return registeredUser
        } catch (err) {
            return err
        }
    },
}
