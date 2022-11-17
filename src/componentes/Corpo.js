import Post from "./Posts";
import Stories from "./Stories";
import Sidebar from "./SideBar";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />

        <Post />
      </div>

      <Sidebar />
    </div>
  );
}
