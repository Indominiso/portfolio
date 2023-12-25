interface ProjectData {
  imgSrc: string;
}

const PhotosContent = () => {
  const photos: ProjectData[] = [
    { imgSrc: "https://i.ibb.co/3r2LLNf/Screenshot-10.png" },
    { imgSrc: "https://i.ibb.co/BcRVSdP/Screenshot-5.png" },
    { imgSrc: "https://i.ibb.co/GJJN5G2/Screenshot-7.png" },
    { imgSrc: "https://i.ibb.co/XpNM918/media-5.png" },
    { imgSrc: "https://i.ibb.co/vJJ5pG3/Screenshot-6.png" },
    { imgSrc: "https://i.ibb.co/VQ27XXR/Screenshot-17.png" },
    { imgSrc: "https://i.ibb.co/DfjGdH0/media-4.png" },
    { imgSrc: "https://i.ibb.co/PY9sKgq/Screenshot-11.png" },
    { imgSrc: "https://i.ibb.co/8rty2Dx/b.png" },
    { imgSrc: "https://i.ibb.co/yyj79fK/c.png" },
    { imgSrc: "https://i.ibb.co/dKtSRSx/media-3.png" },
    { imgSrc: "https://i.ibb.co/Xx4fr3q/media-2.png" },
    { imgSrc: "https://i.ibb.co/D5kj7cV/media-1.png" },
    { imgSrc: "https://i.ibb.co/C6cRQbh/Screenshot-23.png" },
    { imgSrc: "https://i.ibb.co/Pg75n33/media.png" },
    { imgSrc: "https://i.ibb.co/9sprXf4/Screenshot-14.png" },
    { imgSrc: "https://i.ibb.co/vZGnpv5/Screenshot-9.png" },
    { imgSrc: "https://i.ibb.co/N6rPNXj/a.png" },
  ].reverse();

  return (
    <div className="h-[calc(100vh-4rem)] scrollbar-hide overflow-y-auto">
      <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-4 scrollbar-hide">
        {photos.map((project, index) => (
          <div className="relative h-0 pb-[56.25%] w-full">
            <img
              className="absolute top-0 left-0 h-full w-full "
              key={index}
              src={project.imgSrc}
              alt={`Photo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosContent;
