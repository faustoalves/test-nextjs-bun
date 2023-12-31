const Candle = ({ size = 148, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 148) * 152}
      className={`${className} fill-current`}
      viewBox="0 0 148 152"
    >
      <path
        fillRule="evenodd"
        d="M147.5 76.9c.3-75.3-88-98-139.1-54.2-2.2 3.2-7.5 4.7-7.3 8.4C-.7 33.2.3 37.6 3 37c4.5-3.4 9.7-10 15-14.4C61.9-11 134.2 5.9 142.2 66c7.4 53.4-51.6 99.5-101.6 71.7C20.8 128 5.7 106 8.6 83.5c.9-21.4 7-48.6 25.4-58.8 7.6-3.6 2.1-9.5-3.1-3.8C12.1 31.5 5.6 58.5 3.8 79.1c-3.1 96.9 138.8 94 143.7-2.2z"
        clipRule="evenodd"
      ></path>
      <path d="M111.2 74.8C105.3 43.4 82.5 62.4 68.6 57c21.7-9.3 3.9-35.7-15.2-31.6-4.8.2 7.2 8.9 3.7 22.1-.1 6.4 2.6 10.2 8.5 10-.7 8.7-21.6 1.3-27.1 10.5-6.1 12.2 4.2 25.7 3 39.1 5.2 6.7 6.5 18.4 15.5 21.7 17.6 1.9 42.3-.1 54.6-14 3-5.6 1-15.9-1.9-21.7 5.1-4 2.8-13 1.5-18.3zM60.5 39.6c.2-4.1-1-8.5-3.7-11.7 33.1.6 10.3 43.5 12 18.1.2-1.1-2.7-.1-2.9.9-.2 16.2-8.2 2.5-5.4-7.3zm49.4 72.6c-.9 9.6-14.2 11.3-21.3 13-24.7 7-46 3.8-34.4-25.7 1.5 3.6 10.2 7.2 13.2-.4 3-10.1-3.1-11.7-2.5 0-3 11-12.3-13.2-13.8 5-4 18.9-10.8-10-7.1-15.1 6.2-.1 7.3-6.8 8.9-11.4 1.2-3 4.3-.3 5.5 1.2 12.3 12.6 9.6-17.8 21.3.8 5.5 2.5 8.2-4 11.1-6.1 4.1 4 5.4 10.3 8.6 15.1 7.6 6 12.3 13.1 10.5 23.6zm-7.8-24.9c-16.4-36.1-12.5 4-25.6-15.9-8.1-4.6-9.5 14.9-16 5.4-2-2.5-4.9-3-7.7-1.8-4.6 2-2.9 11.5-7.7 12.2-8.2-2.7-8.6-21.2 2.1-22.2 7.3.8 18.2-6.1 22.2.6.7.7 3.4-.8 2.6-1.7-4.2-5.7 17.8-6.7 23.1-6.4 11.9-.3 22.6 46.5 7 29.8z"></path>
      <path d="M91.3 85.4c5.7 6.4 12.3 39.5-.6 17.8-.3-1.1-3.1.1-2.8 1.4.5 6.8 11.2 11.6 13.7 3.6 1.3-4.4-5.7-29.1-10.3-22.8z"></path>
    </svg>
  );
};

export default Candle;
