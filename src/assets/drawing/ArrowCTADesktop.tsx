const ArrowCTADesktop = ({ size = 256, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 256) * 50}
      className={`${className} fill-current`}
      viewBox="0 0 256 50"
    >
      <g clipPath="url(#clip0_52_276)">
        <path
          d="M83.6 30.9c24.9-3.9 178.3 2.4 129-12.1-18-7.3 44.4 5.5 42.9 9.6-8 7.5-24.1 15.3-34.5 20.5-9.4-1.9 17.2-14 19.8-18.8-49 .4-98.3 6.6-147.4 7C16.9 46.8-54 4.5 70.7 1c2.5 0 36.4 1.7 35.1 5-29.4-.1-66.7-4.7-94.3 8.7-12.2 20 58.2 14.5 72.1 16.2z"
          opacity="0.7"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_52_276">
          <path d="M0 0H255V49H0z" transform="translate(.5 .5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowCTADesktop;
