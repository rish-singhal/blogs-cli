import chalk from 'chalk'
import readlineSync from 'readline-sync'
import fs from 'fs'
import { promisify } from 'util'
import { execSync } from 'child_process'

const writeFileAsync = promisify(fs.writeFile);

const takeInput = (inputMessage) => {
    const input = readlineSync.question(inputMessage).trim()
    const command = input.split(' ')[0]
    const args = input.split(' ').slice(1)

    return {command, args}
}

const inputParameter = (parameterMessage, defaultValue = "") => {
  while (true) {
    let input = readlineSync.question(chalk.blue(parameterMessage)).trim()
    input = input.length > 0 ? input : defaultValue

    console.log()
    
    if (input.length > 0)
      return input

    console.log(chalk.bgRed("Error:"), "Please enter a value")
    console.log()
  }
}

const writeBlog = async (filePath, data) => {
  console.log(chalk.green('Creating blog...'))
  if (fs.existsSync(filePath)) {
    return {message: 'File already exists', success: false}
  }

  try {
    await writeFileAsync(filePath, data, { encoding: 'utf8' })
    return {message: 'Markdown file created successfully!', success: true}
	} catch (err) {
    return {message: 'Provided path does not exist.', success: false}
  }
}

const editBlog = async (editor, filePath) => {
  console.log(chalk.green('Opening blog in editor...'))
  const editorPath = `${editor} ${filePath}`

  try {
    execSync(editorPath)
    return {message: 'Blog post opened in editor successfully!', success: true}
  } catch (err) {
    return {message: 'Provided editor does not exist.', success: false}
  }
}

export { takeInput, inputParameter, writeBlog, editBlog }
