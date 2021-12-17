import chalk from 'chalk'
import os from 'os'

const USERNAME = os.userInfo().username

const INPUT_MESSAGE = chalk.yellow("blogs-cli> ")
const EXIT_MESSAGE = "\nBye!\n"

const welcome = () => {
  console.log()
  console.log(chalk.black(chalk.bgYellow("Welcome to the blogs CLI!")))
  console.log("Hi", chalk.green(`${USERNAME}!`))
  console.log("I'm blogs-cli, your personal blogging assistant.\n")
}

const wrongCommand = () => {
  console.log()
  console.log(
    chalk.bgRed("Wrong Command:"),
    "Type",
    chalk.green("help"),
    "to see the list of commands"
  )
  console.log()
}

const error = (message) => {
  console.log()
  console.log(chalk.bgRed("Error:"), message)
  console.log()
}

const success = (message) => {
  console.log()
  console.log(chalk.black(chalk.bgGreen("Success:")), message)
  console.log()
}

const message = ({
    welcome,
    wrongCommand,
    error,
    success,
    text: ({
      INPUT_MESSAGE,
      EXIT_MESSAGE
    }),
})

export default message
