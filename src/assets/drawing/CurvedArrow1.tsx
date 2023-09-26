const CurvedArrow1 = ({ size = 140, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 129) * 46}
      className={`${className} fill-current`}
      viewBox="0 0 129 46"
    >
      <path d="M.1 32C.3 23.6 6 21.4 11.4 16.9c30.4-18.8 67.8-6.9 98.7.8-3.2-4.5-12.3-21.5.5-16.9 5.9 8.4 10.5 18.2 15.6 27.2 3.7 7 2 10.1-5.5 11.6-10.3 2-20 5.2-30.6 6.4.7-4.6 8.7-9.7 23.9-15.3C77.5 14.4 35 7.5.1 32z"></path>
    </svg>
  );
};

export default CurvedArrow1;
