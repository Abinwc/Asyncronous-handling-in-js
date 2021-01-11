const blogs=[
    {title:"Blog One",description:"This is Blog One"},
    {title:"Blog Two",description:"This is Blog Two"}
];



function createBlog(blog,callback){
    setTimeout(()=>{
        blogs.push(blog);
        callback();
    },2000)   
}


function getBlogs(){
    blogs.forEach((blog)=>{
         console.log(blog.title);
    })
}

createBlog({title:"Blog Three",description:"This is Blog Three"},getBlogs);