const ArrowCTAMobile = ({ size = 256, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 45) * 37}
      className={`${className} fill-current`}
      viewBox="0 0 45 37"
    >
      <g clipPath="url(#clip0_52_274)">
        <path d="M42.9 11.7c-8.6-5.2-4.9-2.6-7.2 4.7-3.8 11-25.2 27.6-34 16 .6-.7 1.2.1 1.8.4 13.5 4 31.8-13.2 28.2-26.7-2.9 1.5-6.1 9.6-10 7.2-.2-3.2 9.5-13.9 12.8-11.4 2.4 2.2 14 9.4 8.4 9.8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_52_274">
          <path d="M0 0H44V36H0z" transform="translate(.5 .5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowCTAMobile;
