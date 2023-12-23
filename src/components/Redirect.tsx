import { useState } from "react";

interface Props {
  name: string;
  redirectLink?: string;
}

function Redirect({ name, redirectLink }: Props) {
  const [opacity, setOpacity] = useState(0.5);
  const [transform, setTransform] = useState("translateY(0px)");

  const handleMouseEnter = () => {
    setOpacity(1);
    setTransform("translateY(-5px) translateX(5px)");
  };

  const handleMouseLeave = () => {
    setOpacity(0.5);
    setTransform("translateY(0px)");
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
      className="inline-block ml-1"
      style={{ opacity: opacity, transform: transform }}
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
        <button
          className="font-metroregular text-left text-white text-[1.5rem]"
          style={{ opacity: opacity }}
        >
          {name}
        </button>
        <RedirectIcon />
      </a>
    </ul>
  );
}

export default Redirect;
