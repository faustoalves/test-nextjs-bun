const CurvedArrow2 = ({ size = 140, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 129) * 41}
      className={`${className} fill-current`}
      viewBox="0 0 129 41"
    >
      <path d="M.6 9.2c26 35.6 80.6 27.3 110.1.2-12.4-.2-24.5 3.3-37.6-2.5 2.9-1.1 4.2-2.1 5.5-2 13.1 1 25.8-.8 38.5-3.9 23-6.1 2 24.6 7.2 40-8.3-6.1-8.2-14.6-6.6-23.6-29 19.8-63.4 30.7-96.8 15.4C14.6 30 9 25 3.7 20.3 0 16.9.2 15.1.6 9.2z"></path>
    </svg>
  );
};

export default CurvedArrow2;
