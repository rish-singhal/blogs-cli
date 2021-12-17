import chalk from 'chalk'
import os from 'os'

const USERNAME = os.userInfo().username

const welcome = () => {
  console.log()
  console.log(chalk.black(chalk.bgYellow("Welcome to the blogs CLI!")))
  console.log("Hi", chalk.green(`${USERNAME}!`))
  console.log("I'm blogs-cli, your personal blogging assistant.\n")
}

const wrongCommand = () => {
  console.log(
    chalk.red("Wrong Command:"),
    "Type",
    chalk.green("help"),
    "to see the list of commands"
  )
}

const messages = ({
    welcome,
    wrongCommand
})

export default messages
