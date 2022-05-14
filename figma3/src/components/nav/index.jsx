const Nav = () => {
  return (
    <nav className="pl-[16px]">
      <ul className="flex flex-col justify-start items-start gap-y-[14.62px]">
        <li className="flex justify-start items-center gap-x-[6.22px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.78"
            height="7.78"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <span className="font-bold text-black leading-[141.6%] text-[6.49585px] capitalize tracking-[0.055em]">
            Explore
          </span>
        </li>
        <li className="flex justify-start items-center gap-x-[6.22px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.78"
            height="7.78"
            fill="currentColor"
            class="bi bi-music-note-beamed"
            viewBox="0 0 16 16"
          >
            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
          </svg>
          <span className="font-bold text-black leading-[141.6%] text-[6.49585px] capitalize tracking-[0.055em]">
            Songs
          </span>
        </li>
        <li className="flex justify-start items-center gap-x-[6.22px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.78"
            height="7.78"
            fill="currentColor"
            class="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          <span className="font-bold text-black leading-[141.6%] text-[6.49585px] capitalize tracking-[0.055em]">
            Artist
          </span>
        </li>
        <li className="flex justify-start items-center gap-x-[6.22px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.78"
            height="7.78"
            fill="currentColor"
            class="bi bi-vinyl"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
            <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <span className="font-bold text-black leading-[141.6%] text-[6.49585px] capitalize tracking-[0.055em]">
            Albums
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
