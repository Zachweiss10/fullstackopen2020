const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('', async(request, response) => {
  blogs = await Blog.find({})
    response.json(blogs)
})
  
blogRouter.post('', async(request, response) => {
  const blog = new Blog(request.body)
  response = await blog.save()
  response.status(201).end()
})

blogRouter.delete('/:id', async(request, response)=> {
  const bid = String(request.params.id)
  console.log(bid)
  blogs = await Blog.findByIdAndDelete({'_id':bid})
  response.status(204).end()
})

module.exports = blogRouter