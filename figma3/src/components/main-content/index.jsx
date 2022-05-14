import CollectionBox from "../collection-box";
import Nav from "../nav";
import Singer from "../singer";

const MainContent = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-start items-center gap-x-[30px] ">
        <Nav />
        <Singer />
      </div>
      <CollectionBox />
    </div>
  );
};
export default MainContent;
