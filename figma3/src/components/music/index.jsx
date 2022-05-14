import Download from "../download";
import Header from "../header";
import MainContent from "../main-content";

const Music = () => {
  return (
    <div className="xl:w-[574px] xl:h-[405px] m-auto bg-white rounded-[27px] w-full relative">
      <Header />
      <div className="flex justify-between items-start gap-x-[20px] w-full flex-nowrap">
        <MainContent />
        <Download />
      </div>
      <div className="absolute top-20 -left-6 w-9 h-9 bg-[#C7C9E2] rounded-full"></div>
    </div>
  );
};
export default Music;
