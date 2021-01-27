const blogRouter = require('express').Router()
const { ObjectId } = require('bson')
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

blogRouter.put('/:id', async(request, response)=>{
  const body = new Blog(request.body)
  console.log(body.id)
  blogs = await Blog.updateOne({'_id':ObjectId(request.params.id)}, {$set: {title:body.title, author: body.author, url: body.url, likes:body.likes}})
  response.status(204).json(blogs)
})
module.exports = blogRouter