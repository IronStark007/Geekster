const blogging = require('./blogging');
const fs = require('fs');
const path = require('path');

var id = blogging.length + 1;

const getAllBlogs = () => {
    var content = fs.readFileSync(path.join(__dirname, 'blogging.js'), "utf8");
    start = content.indexOf("=");
    return content.slice(start + 1, );
}


const createBlogHandler = (filename, blog) => {
    var content = fs.readFileSync(path.join(__dirname, filename), "utf8");
    blog_list = content.slice(0, -1)
    complete_blog = `${blog_list}${JSON.stringify(blog)},]`
    fs.writeFileSync(path.join(__dirname, filename), complete_blog, 'utf8');
}
const updateOrDeleteBlogHandler = (filename, blog) => {
    var content = fs.readFileSync(path.join(__dirname, filename), "utf8");
    end = content.indexOf("=")
    first_words = content.slice(0, end + 1)
    complete_blog = `${first_words} ${JSON.stringify(blog)}`
    fs.writeFileSync(path.join(__dirname, filename), complete_blog, 'utf8');
}
const createBlog = (d) => {
    data = JSON.parse(d);
    newBlog = {
        [id++]: {
            title: data.title,
            body: data.body,
            createdAt: Date.now()
        }
    }
    createBlogHandler('blogging.js', newBlog);
}

const updateBlog = (d, id) => {
    data = JSON.parse(d);
    blog = blogging.filter(blog => Object.keys(blog) == id)
    newBlog = {
        title: data.title,
        body: data.body,
        createdAt: Date.now()
    }
    blog[0][id] = newBlog
    updateOrDeleteBlogHandler('blogging.js', blogging);
    console.log("Updated blog")
}
const deleteBlog = (id) => {
    blog = blogging.filter(blog => Object.keys(blog) == id)
    blogging.splice(id - 1, 1)
    updateOrDeleteBlogHandler('blogging.js', blogging);
    console.log("Deleted blog")
}

module.exports = {
    getAllBlogs: getAllBlogs,
    createBlog: createBlog,
    updateBlog: updateBlog,
    deleteBlog: deleteBlog
}