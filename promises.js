const blogs = [{ title: "Blog One", content: "This is blog one" },
{ title: "Blog Two", content: "This is blog two" }];

function createBlog(blog) {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            blogs.push(blog)
             
            const error= true;

            if(!error){
                resolve();
            }
            else{
                reject('Something went wrong');
            }
        }, 2000);
      })
}


function getBlogs() {
    let output = '';
    blogs.forEach(blog => {
        output += blog.title+"\n";
    });
    console.log(output)
}

createBlog({ title: "Blog Three", body: "This is Blog Three" }).then(getBlogs).catch(error=>console.log(error));