import ModalRedirect from "./ModalRedirect";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  selected: boolean;
  onSelect: () => void;
}

const Project = ({
  title,
  description,
  link,
  imgSrc,
  selected,
  onSelect,
}: ProjectProps) => {
  return (
    <div className="relative" tabIndex={0}>
      <h2
        className="text-2xl text-white text-center py-[0.5rem] font-metrobold"
        onClick={onSelect}
      >
        {title}
      </h2>
      <div className="relative h-64">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          onClick={onSelect}
        />
        {selected && (
          <div
            className="absolute top-0 left-0 w-full h-full rounded-xl p-4 flex flex-col justify-between"
            style={{ backdropFilter: "blur(2rem)" }}
          >
            <p className="text-white font-metroregular  text-xl">
              {description}
            </p>
            <ModalRedirect name="View Project" redirectLink={link} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
