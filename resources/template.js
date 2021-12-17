const postTemplate = (title) => {
  const postHeaders = `---
title: "${title}"
mathjax: true
layout: post
comments: false
---
`

  return postHeaders
}

export default postTemplate
