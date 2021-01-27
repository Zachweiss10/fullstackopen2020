/*Tests*/
const listHelper = require('../utils/list_helper')

test('dummy returns one', () =>{
    const blogs = [{
        likes: 1
    }]

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () =>{
    test('of empty list is zero', () => {
        const blogs = []
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(0)
    })
    test('when list has only one blog, equals the likes of that', () => {
        const blogs = [{likes: 1}]
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(1)
    })
    test('of a bigger list is calculated right', () => {
        const blogs = [{likes: 1}, {likes: 2}, {likes: 3}]
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(6)
    })
})