const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('', async(request, response) => {
  blogs = await Blog.find({})
    response.json(blogs)
    .catch(error => console.log(error))
})
  
blogRouter.post('', async(request, response) => {
  const blog = new Blog(request.body)
  response = await blog.save()
  response.status(201).json(result)
})

blogRouter.delete('/:id', async(request, response)=> {
  const body = request.body
  const bid = body.id
  blogs = await Blog.findByIdAndDelete({id:bid})
  response.status(204).end()
})

module.exports = blogRouter