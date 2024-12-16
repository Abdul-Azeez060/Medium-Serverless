import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface blog {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
}

function useBlog(id: string) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<blog>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setBlog(response.data?.post);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    loading,
    blog,
  };
}

export default useBlog;
