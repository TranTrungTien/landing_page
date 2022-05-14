const DownloadBox = ({ imageboxStyle, image, boxStyle, children }) => {
  return (
    <div
      className={`rounded-[9px] p-[6px] bg-[#EDEBF6] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.1)] ${boxStyle}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-2">
          <div className={`rounded-full ${imageboxStyle}`}>
            <img
              src={image}
              alt="DownloadImage"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div>
            <h5 className="font-bold text-[5.27284px] leading-[141.6%] capitalize ">
              Estheras
            </h5>
            <p className="font-bold text-[4px] leading-[141.6%] capitalize text-[rgba(18,18,18,0.31)] mt-px">
              Arlene McCoy
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default DownloadBox;
