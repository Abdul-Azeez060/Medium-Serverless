import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

function Blogs() {
  // 1. state var
  // 2. context blogs []
  // 3. custom hooks (selected)
  const { loading, blogs } = useBlogs();
  console.log(blogs, "these are blogs");
  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <Appbar />
      <div className="flex justify-center h-screen items-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
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
