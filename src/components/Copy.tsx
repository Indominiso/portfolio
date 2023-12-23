import { useState } from "react";

interface Props {
  name: string;
  copyString: string;
}

function Copy({ name, copyString }: Props) {
  const [showMessage, setShowMessage] = useState(false);
  const [opacity, setOpacity] = useState(0.5);
  const [transform, setTransform] = useState("translateY(0px)");

  const handleCopy = () => {
    navigator.clipboard.writeText(copyString);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setTransform("translateY(-5px) translateX(5px)");
  };

  const handleMouseLeave = () => {
    setOpacity(0.5);
    setTransform("translateY(0px)");
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
      className="inline-block ml-1"
      style={{ opacity: opacity, transform: transform }}
    >
      {" "}
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>{" "}
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>{" "}
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
      className="inline-block ml-1 h-4 w-4" // Adjust the size here
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
      <button
        className="font-metroregular text-left text-white text-[1.5rem]"
        style={{ opacity: opacity }}
        onClick={handleCopy}
      >
        {name}
      </button>
      <CopyIcon />
      {showMessage && (
        <div
          className="transition-transform duration-1000 mt-5 ease-in-out font-metroregular text-[1rem] fixed top-0 left-0 right-0 text-center"
          style={{
            transform: `translateY(${showMessage ? "0%" : "-100%"})`,
          }}
        >
          Copied to clipboard <TickIcon />
        </div>
      )}
    </ul>
  );
}

export default Copy;
