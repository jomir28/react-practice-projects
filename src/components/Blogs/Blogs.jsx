import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className="mt-16">
            <h1>hello this is blogs page item: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;