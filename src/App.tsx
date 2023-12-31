import { useState } from "react";
import Header from "./components/Header";
import ButtonContainer from "./components/ButtonContainer";
import Redirect from "./components/Redirect";
import Copy from "./components/Copy";
import ModalButton from "./components/ModalButton";
import ProjectsContent from "./components/ProjectsContent";
import PhotosContent from "./components/PhotosContent";
import AboutContent from "./components/AboutContent";

function App() {
  const [openSlide, setOpenSlide] = useState<string | null>(null);

  return (
    <div>
      <Header
        name="Indominiso"
        description="Transforming your vision into reality."
        description2="Copyright © 2024 Indominiso. All rights reserved."
        slideOpen={openSlide !== null}
      >
        <ModalButton
          name="About Me"
          openSlide={openSlide}
          setOpenSlide={setOpenSlide}
          content={<AboutContent />}
        />
        <ButtonContainer name="Work">
          <ModalButton
            name="Projects"
            openSlide={openSlide}
            setOpenSlide={setOpenSlide}
            content={<ProjectsContent />}
          />
          <ModalButton
            name="Photos"
            openSlide={openSlide}
            setOpenSlide={setOpenSlide}
            content={<PhotosContent />}
          />
        </ButtonContainer>
        <ButtonContainer name="Contact">
          <Copy name="Email" copyString="wip" />
          <Redirect
            name="Discord"
            redirectLink="https://discordapp.com/users/618112370845286426"
          />
          <Redirect
            name="Twitter"
            redirectLink="https://twitter.com/Indominiso"
          />
        </ButtonContainer>
      </Header>
    </div>
  );
}

export default App;

/*
     <ModalButton
            name="Store"
            openSlide={openSlide}
            setOpenSlide={setOpenSlide}
            content={<StoreContent />}
          />
*/
