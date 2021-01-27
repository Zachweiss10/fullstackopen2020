const dummy = (blogs) => {
    return blogs.length
}

const totalLikes = (blogs) => {
    const numOfLikes =  blogs.reduce((accum, blog) =>{
        return accum + blog.likes
    }, 0)
    return numOfLikes
}

module.exports = {
    dummy, 
    totalLikes
}
