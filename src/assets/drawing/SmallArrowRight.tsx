import React from "react";

type Props = {
  className?: string;
};

const SmallArrowRight = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="50"
      fill="none"
      viewBox="0 0 27 42"
      className={`${props.className} fill-current`}
    >
      <path d="M3.75 0c-6.358 13.624 5.18 27.865 18.191 31.646-1.995-3.594-5.05-6.463-5.483-11.228.81.643 1.325.843 1.51 1.233 1.872 3.935 4.517 7.27 7.551 10.38 5.641 5.548-7.04 4.83-10.793 8.988.452-3.439 3.016-4.88 5.978-5.978C9.964 30.14.994 22.149.043 9.91c-.205-2.293.365-4.766.895-7.1C1.343 1.16 1.916.906 3.75 0z"></path>
    </svg>
  );
};

export default SmallArrowRight;
