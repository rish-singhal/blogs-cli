#!/usr/bin/env node

// list of commands and respective functions are present in command
// dictionary
import commands from '../utility/commandRouter.js'
import message from '../utility/messages.js'
import { takeInput } from '../utility/helpers.js'

message.welcome()

while (true) {
  const {command, args} = takeInput(message.text.INPUT_MESSAGE)

  if (args.length > 0) {
    message.wrongCommand()
  } else if (command in commands) {
    await commands[command]()
  } else if (command == 'exit') {
    console.log(message.text.EXIT_MESSAGE)
    break
  } else {
    message.wrongCommand()
  }
}
