const blogs = [{ title: "Blog One", content: "This is blog one" },
{ title: "Blog Two", content: "This is blog two" }];

function createBlog(blog, callback) {
    setTimeout(() => {
        blogs.push(blog)
        callback();
    }, 2000);
}


function getBlogs() {
    let output = '';
    blogs.forEach(blog => {
        output += blog.title+"\n";
    });
    console.log(output)
}

createBlog({ title: "Blog Three", body: "This is Blog Three" }, getBlogs);







