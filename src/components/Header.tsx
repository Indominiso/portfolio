import { ReactNode } from "react";

interface Props {
  name: string;
  description: string;
  description2: string;
  slideOpen: boolean;
  children: ReactNode;
}

function Header({
  name,
  description,
  description2,
  slideOpen,
  children,
}: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center transform ${
        slideOpen ? "translate-x-[-1rem]" : ""
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="w-full max-w-3xl flex flex-col  text-white p-4 text-left">
        <h1 className="font-metrobold text-[2rem] leading-none">{name}</h1>
        {children}
        <p className="font-metrobold text-[2rem] leading-snug">
          <ul>{description}</ul>
          <ul
            className="font-metroregular text-[1.5rem] opacity-50"
            style={{ wordWrap: "break-word" }}
          >
            {description2}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Header;
