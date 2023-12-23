import { useState } from "react";
import Header from "./components/Header";
import ButtonContainer from "./components/ButtonContainer";
import Redirect from "./components/Redirect";
import Copy from "./components/Copy";
import ModalButton from "./components/ModalButton";
import ProjectsContent from "./components/ProjectsContent";
import StoreContent from "./components/StoreContent";
import PhotosContent from "./components/PhotosContent";

function App() {
  const [openSlide, setOpenSlide] = useState<string | null>(null);

  return (
    <div>
      <Header
        name="Indominiso"
        description="Transforming your vision into reality."
        description2="Actively seeking new challenges and opportunies to innovate."
        slideOpen={openSlide !== null}
      >
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
          <ModalButton
            name="Store"
            openSlide={openSlide}
            setOpenSlide={setOpenSlide}
            content={<StoreContent />}
          />
        </ButtonContainer>
        <ButtonContainer name="Contact">
          <Copy name="Email" copyString="suckomydicko" />
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
