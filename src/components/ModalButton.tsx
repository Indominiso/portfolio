import { ReactNode, useState } from "react";
import Modal from "./Modal";

interface Props {
  name: string;
  openSlide: string | null;
  setOpenSlide: (slide: string | null) => void;
  content: ReactNode;
}

const ModalButton = ({ name, openSlide, setOpenSlide, content }: Props) => {
  const isOpen = openSlide === name;
  const [opacity, setOpacity] = useState(0.5);

  const handleButtonClick = () => {
    setOpenSlide(isOpen ? null : name);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0.5);
  };

  return (
    <div>
      <button
        className=" text-white text-left text-[1.5rem] font-metroregular opacity${}"
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: opacity }}
      >
        {name}
      </button>
      <Modal isOpen={isOpen} setIsOpen={setOpenSlide} content={content} />
    </div>
  );
};

export default ModalButton;
