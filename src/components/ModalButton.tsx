import { ReactNode, useState, useCallback } from "react";
import Modal from "./Modal";

interface Props {
  name: string;
  openSlide: string | null;
  setOpenSlide: (slide: string | null) => void;
  content: ReactNode;
}

const ModalButton = ({ name, openSlide, setOpenSlide, content }: Props) => {
  const isOpen = openSlide === name;
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = useCallback(() => {
    setOpenSlide(isOpen ? null : name);
  }, [isOpen, name, setOpenSlide]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div>
      <button
        className={`text-white text-left text-[1.5rem] font-metroregular  transition-all duration-200 ease-in-out ${
          isHovered
            ? "opacity-100 transform translate-x-[1.5rem]"
            : "opacity-50 transform translate-x-0"
        }`}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setOpenSlide} content={content} />
    </div>
  );
};

export default ModalButton;
