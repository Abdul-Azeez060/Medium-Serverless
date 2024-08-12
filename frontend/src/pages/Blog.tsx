import { useParams } from "react-router-dom";

function Blog() {
  const param = useParams();
  console.log(param);

  return <div>Blog</div>;
}

export default Blog;
