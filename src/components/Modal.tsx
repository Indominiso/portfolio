import { ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (modal: string | null) => void;
  content: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, content }: ModalProps) => {
  const closeModal = () => {
    setIsOpen(null);
  };

  const [opacity, setOpacity] = useState(0.5);

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0.5);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out fixed top-0 right-0 h-screen pr-[1rem] w-full px-[2rem] sm:px-[4.2rem] bg-black transform z-50 flex flex-col justify-between ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="mt-4 flex-grow">{content}</div>
      <button
        className="text-2xl font-metrobold mb-2 transition-all duration-200 ease-in-out transform hover:scale-125 fixed bottom-0 left-0 right-0 mx-auto"
        onClick={closeModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity: opacity,
          transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 inline-block align-text-top mr-[0.3rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Home
      </button>
    </div>
  );
};

export default Modal;
