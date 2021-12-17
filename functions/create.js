import { DEFAULT_EDITOR, DEFAULT_PATH } from '../resources/constants.js'
import { inputParameter, writeBlog, editBlog } from '../utility/helpers.js'
import postTemplate from '../resources/template.js'
import message from '../utility/messages.js'

import chalk from 'chalk'

const createMessage = () => {
    console.log()
    console.log(chalk.black(chalk.bgGreen("Enter information about the new blog...")))
    console.log()
}

const createBlogMarkdown = async (title, path, editor) => {
  const todayDate = new Date().toISOString().slice(0, 10);
  const fileName = todayDate + `-${title.toLowerCase().replace(/ /g, '-')}.md`
  const filePath = `${path}${fileName}`

  // create file
  let status = await writeBlog(filePath, postTemplate(title))
  if (!status.success) {
    message.error(status.message)
    return
  } else {
    message.success(status.message)
  }

  // edit the file
  status = await editBlog(editor, filePath)
  if (!status.success) {
    message.error(status.message)
    return
  } else {
    message.success(status.message)
  }
}

const create = async () => {
  createMessage()
  const title = inputParameter("Title: ")
  const editor = inputParameter(`Editor: [${DEFAULT_EDITOR}] `, DEFAULT_EDITOR)
  const path = inputParameter(`Path: [${DEFAULT_PATH}] `, DEFAULT_PATH)

  await createBlogMarkdown(title, path, editor)
}

export default create
