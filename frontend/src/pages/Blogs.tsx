import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

function Blogs() {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center h-screen items-center">
        <div className="max-w-xl">
          <BlogCard
            authorName="Abdul Azeez"
            title="How an ugly single website makes 5000$ a Month with Affiliate Marketing. "
            publishedDate="4 Aug 2024"
            content="No need to create a fancy and beautiful website with hundreds of pages to make money online - Making money online is a dream for manage "
          />
          <BlogCard
            authorName="Abdul Azeez"
            title="How an ugly single website makes 5000$ a Month with Affiliate Marketing. "
            publishedDate="4 Aug 2024"
            content="No need to create a fancy and beautiful website with hundreds of pages to make money online - Making money online is a dream for manage "
          />
          <BlogCard
            authorName="Abdul Azeez"
            title="How an ugly single website makes 5000$ a Month with Affiliate Marketing. "
            publishedDate="4 Aug 2024"
            content="No need to create a fancy and beautiful website with hundreds of pages to make money online - Making money online is a dream for manage "
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
