interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <div className="p-4 border-b border-slate-200 pb-2">
      <div className="flex items-center mb-4">
        <div className="flex flex-col justify-center">
          <AvatorComponent name={authorName} />
        </div>
        <div className="font-light pl-2 text-sm ">{authorName}</div>
        <div className="pl-2">
          <Circle />
        </div>
        <div className=" text-slate-400 pl-2 text-sm">{publishedDate}</div>
      </div>
      <div className="font-bold text-2xl">{title}</div>
      <div className="font-regular text-slate-500 text-md mt-1">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-500 text-xs my-4">
        {Math.ceil(content.length / 100) + " minutes read"}
      </div>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 bg-slate-500 rounded-full"></div>;
}

export function AvatorComponent({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center ${
          size == "small" ? "w-6 h-6" : "w-10 h-10"
        }  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span
          className={`font-medium ${
            size === "small" ? "text-xs" : "text-sm"
          }   text-gray-600 dark:text-gray-300`}>
          {name.charAt(0)}
        </span>
      </div>
    </>
  );
}

export default BlogCard;
