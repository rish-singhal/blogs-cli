#!/usr/bin/env node

import chalk from 'chalk'
import messages from '../utility/messages.js'
import readlineSync from 'readline-sync'

// output: welcome message
messages.welcome()

while (true) {
  const input = readlineSync.question(chalk.yellow(`blogs-cli> `))
  if (input == 'exit') {
    console.log('Bye!')
    break
  } else {
    messages.wrongCommand()
  }
  console.log()
}
