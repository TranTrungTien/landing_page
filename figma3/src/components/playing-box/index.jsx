const PlayingBox = () => {
  return (
    <section className="w-[110px] h-[131px] rounded-[19px] bg-gradient-to-b from-[#CD3C61] to-[#334AC5] flex justify-center items-center shadow-[0px_4px_9px_2px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col justify-center items-center gap-y-[14px]">
        <div className="flex justify-center items-center flex-col">
          <div className="w-[18px] h-[18px]">
            <img
              src="/images/smallimage12.png"
              alt="ImageBackground"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h3 className="text-[#F8B6E6] font-bold text-[7.42514px] leading-[#141.6%] capitalize">
            Robert Fox
          </h3>
          <p className="text-[#BC80BE] font-normal text-[3.7454px] leading-[#141.6%] capitalize">
            Ronald Richards
          </p>
        </div>
        <div className="w-[67px] h-[12px]">
          <img
            src="/images/soundeffect.png"
            alt="SoundEffect"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="text-white flex justify-center items-center gap-x-[9px]">
          <button className="w-[14px] h-[14px] grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-skip-start"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
            </svg>
          </button>
          <button className="w-[28px] h-[28px] grid place-content-center rounded-full bg-[#EE7373] text-[#F1E66A]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-play"
              viewBox="0 0 13 16"
            >
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
            </svg>
          </button>
          <button className="w-[14px] h-[14px] grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-skip-start"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default PlayingBox;
