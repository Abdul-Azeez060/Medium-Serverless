import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
}

function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<blog[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setBlogs(response.data?.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    loading,
    blogs,
  };
}

export default useBlogs;
