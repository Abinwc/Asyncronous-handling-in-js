
const blogs = [
    { title: "Blog One", description: "This is Blog One" },
    { title: "Blog Two", description: "This is Blog Two" }
];

function createBlog(blog) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push(blog);
            const error = true;

            if (!error) {
                resolve();
            }
            else {
                reject('There is an error');
            }
        }, 2000)
    })

}

function getBlogs() {
    blogs.forEach((blog) => {
        console.log(blog.title);
    })
}

createBlog({ title: "Blog Three", description: "This is Blog Three" })
    .then(getBlogs)
    .catch((error) => console.log(error));
