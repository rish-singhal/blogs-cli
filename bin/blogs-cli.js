#!/usr/bin/env node

// list of commands and respective functions are present in command
// dictionary
import commands from '../utility/commandRouter.js'
import message from '../utility/messages.js'
import { takeInput } from '../utility/helpers.js'

message.welcome()

while (true) {
  const {command, args} = takeInput(message.text.INPUT_MESSAGE)

  if (command in commands)
    commands[command](args)
  else if (command == 'exit' && args.length == 0) {
    console.log(message.text.EXIT_MESSAGE)
    break
  } else
    message.wrongCommand()

  // empty line
  console.log()
}
