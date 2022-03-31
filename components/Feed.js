import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed() {
  return (
    <div className=" h-screen pb-44 pt-6 w-1/2 overflow-y-auto">
      <Stories />
      <InputBox />
      <Posts />
    </div>
  );
}

export default Feed;
