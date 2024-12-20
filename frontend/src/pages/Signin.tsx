import Auth from "../components/Auth";
import Quote from "../components/Quote";

function Signin() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Auth type={"signin"} />
      </div>
      <div className="invisible md:visible">
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
