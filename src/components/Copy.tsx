import { useState } from "react";

interface Props {
  name: string;
  copyString: string;
}

function Copy({ name, copyString }: Props) {
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    if (!showMessage) {
      navigator.clipboard.writeText(copyString);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const CopyIcon = () => (
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
      className={`inline-block ml-1 transition-all duration-200 ease-in-out ${
        isHovered ? "opacity-100" : "opacity-50"
      }`}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  const TickIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1 h-4 w-4"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <ul
      className="flex items-center relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-all duration-200 ease-in-out ${
          isHovered
            ? "opacity-100 transform translate-y-[-5px] translate-x-[5px]"
            : "opacity-50"
        }`}
        onClick={handleCopy}
      >
        <button className="font-metroregular text-left text-white text-[1.5rem]">
          {name}
        </button>
        <CopyIcon />
      </div>
      <div
        className="transition-transform duration-500 mt-5 ease-in-out font-metroregular text-[1rem] fixed top-0 left-0 right-0 text-center"
        style={{
          opacity: showMessage ? 1 : 0,
          transform: `translateY(${showMessage ? "0%" : "-100%"})`,
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        Copied to clipboard <TickIcon />
      </div>
    </ul>
  );
}

export default Copy;
