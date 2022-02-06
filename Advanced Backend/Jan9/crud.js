const blogging = require('./blogging');
const fs = require('fs');
const path = require('path');

const updateOrDeleteBlogHandler = (filename, blog) => {
    var content = fs.readFileSync(path.join(__dirname, filename), "utf8");
    end = content.indexOf("=")
    first_words = content.slice(0, end + 1)
    complete_blog = `${first_words} ${JSON.stringify(blog)}`
    fs.writeFileSync(path.join(__dirname, filename), complete_blog, 'utf8');
}

const getBlogbyID = (id) => {
    blog = blogging.filter(blog => Object.keys(blog) == id)[0]
    return blog
}

const updateTitle = (data) => {
    blog = blogging.filter(blog => Object.keys(blog) == data.id)[0]

    newBlog = {
        title: data.title,
        body: blog[data.id].body,
        createdAt: Date.now()
    }
    blog[data.id] = newBlog
    updateOrDeleteBlogHandler('blogging.js', blogging);
    console.log("Updated blog")
}
const deleteBlogById = (id) => {
    blogging.splice(id - 1, 1)
    console.log("Deleted blog", blogging);
    updateOrDeleteBlogHandler('blogging.js', blogging);
    console.log("Deleted blog")
}

module.exports = {
    getBlogbyID: getBlogbyID,
    updateTitle: updateTitle,
    deleteBlogById: deleteBlogById
}