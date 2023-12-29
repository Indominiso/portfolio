import { useState } from "react";

interface Props {
  name: string;
  redirectLink?: string;
}

function Redirect({ name, redirectLink }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const RedirectIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ml-1 transition-all duration-200 ease-in-out delay-150 ${
        isHovered ? "opacity-100 scale-110 shadow-lg" : "opacity-50"
      }`}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

  return (
    <ul
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={redirectLink} target="_blank">
        <div
          className={`transition-all duration-200 ease-in-out ${
            isHovered
              ? "opacity-100 transform translate-x-[15px]"
              : "opacity-50"
          }`}
        >
          <button className="font-metroregular text-left text-white text-[1.5rem]">
            {name}
          </button>
          <RedirectIcon />
        </div>
      </a>
    </ul>
  );
}

export default Redirect;
