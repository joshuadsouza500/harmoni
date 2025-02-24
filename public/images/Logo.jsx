import * as React from "react";
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M12.5 12.5A14.338 14.338 0 0 1 0 0a14.338 14.338 0 0 1 12.5 12.5ZM25 25a14.338 14.338 0 0 1-12.5-12.5A14.338 14.338 0 0 1 25 25ZM12.5 12.5A14.338 14.338 0 0 1 0 25a14.338 14.338 0 0 1 12.5-12.5ZM25 0a14.338 14.338 0 0 1-12.5 12.5A14.338 14.338 0 0 1 25 0Z"
    />
  </svg>
);
export default Logo;
