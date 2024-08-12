import Quote from "../components/Quote";
import Auth from "../components/Auth";

function Signup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <Auth type={"signup"} />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
