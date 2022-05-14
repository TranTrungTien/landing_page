import DownloadBox from "../download-box";
import DownloadContainer from "../download-container";

const Download = () => {
  return (
    <div className={`xl:w-[172px] h-auto mt-2`}>
      <h3 className="font-normal text-black text-xs capitalize leading-4 ml-2 mb-[22px]">
        download
      </h3>
      <DownloadContainer>
        <DownloadBox
          image="/images/smallimage3.png"
          boxStyle="mb-[9px] w-[142px] h-[31px] ml-[10px] bg-[#EDEBF6]  shadow-[0px_4px_5px_1px_rgba(0,0,0,0.1)]"
          imageboxStyle="w-[20px] h-[20px]"
        >
          <button className="w-[14px] h-[14px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage4.png"
          boxStyle="mb-[12px] w-[142px] h-[31px] ml-[10px] bg-[#ECECF6] shadow-[0px_4px_6px_1px_rgba(0,0,0,0.1)]"
          imageboxStyle="w-[24px] h-[24px]"
        >
          <button className="w-[14px] h-[14px] grid place-content-center text-black font-black relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-pause "
              viewBox="0 0 14 14"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage5.png"
          boxStyle="mb-[12px] w-[184px] h-[44px] ml-[8px] bg-[#FAF9FE] shadow-[0px_4px_5px_3px_rgba(134,126,126,0.25)]"
          imageboxStyle="w-[30px] h-[30px]"
        >
          <button className="w-[26px] h-[26px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage6.png"
          boxStyle="mb-[11px] w-[142px] h-[31px] ml-[8px] bg-[#E9E9F5] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] opacity-90"
          imageboxStyle="w-[14px] h-[14px]"
        >
          <button className="w-[14px] h-[14px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage7.png"
          boxStyle="mb-[11px] w-[142px] h-[30px] ml-[7px] bg-[#EAE9F9] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] opacity-70"
          imageboxStyle="w-[20px] h-[20px]"
        >
          <button className="w-[10px] h-[10px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage8.png"
          boxStyle="mb-[10px] w-[144px] h-[28x] bg-[#E1E0F8] shadow-[0px_4px_4px_rgba(0,0,0,0.12)] opacity-60"
          imageboxStyle="w-[18px] h-[18px]"
        >
          <button className="w-[10px] h-[10px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
        <DownloadBox
          image="/images/smallimage9.png"
          boxStyle="w-[144px] h-[28x] ml-[5px] bg-[#E2E1F3] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] opacity-40"
          imageboxStyle="w-[16px] h-[16px]"
        >
          <button className="w-[14px] h-[14px] grid place-content-center text-black font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </DownloadBox>
      </DownloadContainer>
    </div>
  );
};
export default Download;
