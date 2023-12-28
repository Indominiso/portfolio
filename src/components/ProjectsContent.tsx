import { useState } from "react";
import Project from "./Project";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
}

const ProjectsContent = () => {
  const projects: ProjectData[] = [
    {
      title: "Glider of Doom",
      description: "Accumulated over a hundred thousand visits.",
      link: "https://www.roblox.com/games/15303231522/UGCS-Glider-of-Doom",
      imgSrc: "https://c5.rbxcdn.com/4dd1d4f64102c4094d060165818b4270",
    },
    {
      title: "Luminescent Echoes",
      description:
        "1st Place Winner of the 2023 Tropical Hidden Developers game jam.",
      link: "https://www.roblox.com/games/14105065975/Luminescent-Echoes",
      imgSrc:
        "https://tr.rbxcdn.com/a45d7dbc4a9aed6486a4a8462f4ab233/768/432/Image/Png",
    },
    {
      title: "Cube Elysium",
      description:
        "2nd Place Winner of the 2022 Minigames Hidden Developers game jam.",
      link: "https://www.roblox.com/games/14105065975/Luminescent-Echoes",
      imgSrc:
        "https://tr.rbxcdn.com/153ba952c6b9590d54f4e1635bf00bc5/150/150/Image/Png",
    },
    {
      title: "Medieval Game",
      description: "A game based on Dark RP and Kingdom Come Delivarance.",
      link: "https://www.roblox.com/games/14275770364/Medieval-Game",
      imgSrc:
        "https://tr.rbxcdn.com/e09aaf0baa1c9bf3ae99061f36ab8569/768/432/Image/Png",
    },
  ];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedProject((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-[calc(100vh-4rem-50px)] scrollbar-hide overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 scrollbar-hide w-full">
        {projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            selected={selectedProject === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsContent;
