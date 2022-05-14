const Banner = () => {
  return (
    <div className="xl:w-[159px] xl:h-[159px] relative flex justify-center items-center rounded-full">
      <div className="xl:w-[127px] xl:h-[129px]">
        <img
          src="/images/image1.png"
          alt="Image1"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <svg
        viewBox="0 0 159 159"
        className="absolute -top-1 left-0 w-full h-full"
      >
        <circle
          className="absolute top-0 left-0 w-full h-full transform rotate-[230deg] origin-center"
          cx={79}
          cy={79}
          r={78}
          fill="none"
          strokeLinecap="round"
          stroke="#9C9BBB"
          strokeWidth="3px"
          strokeDasharray={500}
          strokeDashoffset={380}
        ></circle>
        <circle
          className="absolute top-0 left-0 w-full h-full transform -rotate-[38deg] origin-center"
          cx={79}
          cy={79}
          r={78}
          fill="none"
          strokeLinecap="round"
          stroke="#E85353"
          strokeWidth="4px"
          strokeDasharray={500}
          strokeDashoffset={370}
        ></circle>
      </svg>
      <button className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[41px] h-[41px] p-[3.42px]">
        <div className="w-full h-full rounded-full bg-[#FFBE0F] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-play"
            viewBox="1 1 14 14"
          >
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          </svg>
        </div>
      </button>
      <div className="w-[27px] h-[27px] absolute bottom-5 left-1">
        <img
          src="/images/smallimage1.png"
          alt="Image1"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-[16px] h-[16px] absolute top-8 left-1">
        <img
          src="/images/smallimage2.png"
          alt="Image2"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};
export default Banner;
