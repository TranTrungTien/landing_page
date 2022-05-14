import Box from "../box";
import PlayingBox from "../playing-box";

const CollectionBox = () => {
  return (
    <section className="flex justify-start items-end pl-[23px] mt-[34px]">
      <div className="flex flex-col justify-center items-center gap-y-[14px] max-w-max mr-[17px] pb-5">
        <div className="w-[14px] h-[14px] rounded-full bg-[#C4487A]"></div>
        <div className="w-[14px] h-[14px] rounded-full bg-[#57B9C6]"></div>
        <div className="w-[14px] h-[14px] rounded-full bg-[#EC4743]"></div>
      </div>
      <div className="flex justify-start items-start">
        <div className="mr-[19px]">
          <PlayingBox />
        </div>
        <ul className="flex justify-start items-start gap-x-[9px]">
          <li>
            <Box />
          </li>
          <li>
            <Box />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default CollectionBox;
