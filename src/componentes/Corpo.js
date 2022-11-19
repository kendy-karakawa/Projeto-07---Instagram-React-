import Post from "./Posts";
import Stories from "./Stories";
import Sidebar from "./SideBar";

export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />

        <Post />
      </div>

      <Sidebar />
    </div>
  );
}
