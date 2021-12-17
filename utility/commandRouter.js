import createBlog from '../functions/create.js'

import chalk from 'chalk'

const help = () => {
  console.log()
  console.log(chalk.black(chalk.bgGreen("Commands:")))
  console.log(" ", chalk.green("create"), ": to create a new blog")
  console.log(" ", chalk.green("exit"), "  : to exit the CLI")
  console.log()
}

const commands = {
  "create": createBlog,
  // "list": listBlogs,
  // "edit": editBlog,
  // "publish": publishBlog,
  "help": help,
}

export default commands
