import { Link } from "react-router-dom";
import { AvatorComponent } from "./BlogCard";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between px-10 py-3 border-b items-center  z-50">
      <Link to={"/blogs"}>
        <div>Medium</div>
      </Link>
      <div>
        <button
          onClick={() => {
            navigate("/blog/new");
          }}
          type="button"
          className="mr-4 text-white bg-green-800 hover:bg-green-700   focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
          New
        </button>
        <AvatorComponent size="big" name="Abdul Azeez" />
      </div>
    </div>
  );
}

export default Appbar;
