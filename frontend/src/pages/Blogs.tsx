import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import useBlogs from "../hooks/useBlogs";

function Blogs() {
  // 1. state var
  // 2. context blogs []
  // 3. custom hooks (selected)
  const { loading, blogs } = useBlogs();
  console.log(blogs, "these are blogs");
  return loading ? (
    <div>
      <Appbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-screen-md w-full ">
          <Loader />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Appbar />
      <div className="flex justify-center items-center mt-10">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
