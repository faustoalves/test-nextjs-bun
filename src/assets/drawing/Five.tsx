const Five = ({ size = 65, className = "" }) => {
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
        d="M64.934 39.138c.096-4.23-.737-12.151-4.837-17.153-2.988-4.946-10.076-12.793-13.045-7.484-1.868 3.263 3.045 1.673 8.505 7.549 13.276 16.967.402 42.524-26.963 38.229C9.936 56.69-4.077 34.787 4.438 18.08c6.312-29.034 55.18-9.799 52.201-6.796C49.695 3.652 38.394-.486 28.47.212-16.93 3.233-1.53 72.42 40.95 63.31c11.006-2.455 24.013-10.376 23.975-24.172h.01z"
        clipRule="evenodd"
      ></path>
      <path d="M40.386 15.933c-6.111 2.845-12.04 2.752-11.858 10.635 13.975.093 6.446 30.373-1.38 22.034-.334-1.776 2.424-2.018 2.855-3.217 2.5-3.895 5.22-13.313-.642-15.126-2.691-.186-4.31-.279-4.693-2.008.546-2.575.824-11.194 5.191-14.643 3.468 3.208 10.105-3.021 10.527 2.325z"></path>
    </svg>
  );
};

export default Five;
