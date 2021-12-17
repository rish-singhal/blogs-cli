import os from 'os'

const DEFAULT_PATH = '/Users/rishabhsinghal/work/repos/blogs/_posts/'
const DEFAULT_EDITOR = 'code'
// Take username from the `os`
const USERNAME = os.userInfo().username

export {DEFAULT_EDITOR, DEFAULT_PATH, USERNAME}
