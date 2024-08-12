import { AvatorComponent } from "./BlogCard";

function Appbar() {
  return (
    <div className="flex justify-between px-10 py-3 border-b items-center">
      <div>Medium</div>
      <div>
        <AvatorComponent size="big" name="Abdul Azeez" />
      </div>
    </div>
  );
}

export default Appbar;
