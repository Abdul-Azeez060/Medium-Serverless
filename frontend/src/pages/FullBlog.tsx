import { useParams } from "react-router-dom";

function FullBlog() {
  const body = useParams();
  console.log(body);
  return <div>FullBlog</div>;
}

export default FullBlog;
