import readlineSync from 'readline-sync'

const takeInput = (inputMessage) => {
    const input = readlineSync.question(inputMessage).trim()
    const command = input.split(' ')[0]
    const args = input.split(' ').slice(1)

    return {command, args}
}

export { takeInput }
