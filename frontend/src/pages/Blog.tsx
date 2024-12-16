import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import Appbar from "../components/Appbar";
import { AvatorComponent } from "../components/BlogCard";

function Blog() {
  const { id } = useParams();
  console.log(id);
  const { loading, blog } = useBlog(id || " ");
  console.log(blog);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <Appbar />
      <div className="flex justify-center mt-20 ">
        <div className="px-5 grid grid-cols-12 gap-y-4 sm:px-20 w-screen">
          <div className="col-span-12 md:col-span-8 px-5 ">
            <div className="text-3xl font-bold sm:text-5xl">{blog?.title}</div>
            <div className="text-xs sm:text-sm my-2 ">
              Posted on August 24 2024
              <div className="">{blog?.content}</div>
            </div>
            <div className="col-span-12 md:col-span-4 px-5 ">
              Author
              <div className="flex items-center mt-4">
                <div>
                  <AvatorComponent
                    name={blog?.author.name || "anonomyous"}
                    size="small"
                  />
                </div>

                <div className="px-5">
                  <div className="text-lg font-bold">{blog?.author.name}</div>
                  <div className=" text-slate-500 text-sm ">
                    Master of mirth, purveyor of puns, and the funniest person
                    in the kingdom.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
