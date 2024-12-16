import axios from "axios";
import Appbar from "../components/Appbar";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { CreateBlogInput } from "@abdulazeez060/common2/dist";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex items-center flex-col">
        {" "}
        <TextArea
          onTitleChange={(e) => setTitle(e.target.value)}
          onContentChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={async () => {
            console.log(title, "this is title", content, "thsi is content ");
            const obj: CreateBlogInput = { title, content };
            try {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                obj,
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              console.log(response.data);
              navigate("/blogs");
            } catch (error) {
              console.log(
                "Error occured in the post req to add a new blog",
                error
              );
            }
          }}
          type="button"
          className="ml-10 text-white bg-green-800 hover:bg-green-700   focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
          Publish
        </button>
      </div>
    </div>
  );
}

export default NewBlog;
