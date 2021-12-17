# Blog Writing Command Line Tool

Recently, I was thinking of implementing a command line tool to write my blog posts https://rish-singhal.github.io/blogs making it easier for me to write and publish the same.

This command line tool can be spawned anywhere in the terminal and it will take care of the rest.

Currently, it is capable of creating a markdown file at the specified path (jekyll blogs `_posts` directory) with a given template which includes title and opening the same in the editor of choice.

### Table of Contents
- [Blog Writing Command Line Tool](#blog-writing-command-line-tool)
    - [Table of Contents](#table-of-contents)
    - [Instructions to install](#instructions-to-install)
    - [Usage](#usage)
    - [Tech Used](#tech-used)
    - [Features to be implemented](#features-to-be-implemented)
    - [Author](#author)

### Instructions to install

Clone the repository
```bash
$ git clone https://github.com/rish-singhal/blogs-cli.git
```

Install the dependencies by executing following command in the cloned repository
```bash
$ npm install
```

Install the tool
```bash
$ npm install --global .
```
### Usage

Execute the following to start the tool
```bash
$ rishblogs
```


**Note:** The name of the command can be changed in the `packagage.json` file by replacing `rishblogs` with the desired name in the `"bin": {}` property.

```json
{
    "bin": {
        "new-name": "./bin/blogs-cli.js"
    }
}

```

The interface would be as follows:

![](https://i.imgur.com/hD3votU.png)

The following commands are currently supported:

![](https://i.imgur.com/G2q6gmK.png)

To create a new blog, enter `create` and give all the arguments `(blog post name, path, editor commmand)` required

```bash
blogs-cli> create
```

To exit the tool, enter `exit`

```bash
blogs-cli> exit
```

### Tech Used

The CLI tool is implemented in [NodeJS](https://nodejs.org/en/).

### Features to be implemented

- `publish`: To publish the blog post to git.
- `edit`: To edit existing blog post
- `list`: To list all the blog posts
- `delete`: To delete one of the blog posts

### Author

[Rishabh Singhal](https://rish-singhal.github.io/)
