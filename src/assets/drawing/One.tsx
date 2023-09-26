const One = ({ size = 65, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 65 65"
      className={`${className} fill-current`}
    >
      <path
        fillRule="evenodd"
        d="M64.606 33.115C68.7-1.28 9.4-11.243.81 15.913 21.11-10.924 71.939 5.745 61.169 41.01c-18.529 50.754-87.677.542-45.201-31.365C7.02 4.884-.49 31.2 1.254 39.104c3.557 37.924 63.917 30.755 63.343-5.999l.01.01z"
        clipRule="evenodd"
      ></path>
      <path d="M34.664 23.682c-.654 5.97.495 18.537-1.427 23.122-7.946-1.18-1.793-16.05-2.953-21.642-2.09-7.352 3.894-10.468 4.38-1.49v.01z"></path>
    </svg>
  );
};

export default One;
