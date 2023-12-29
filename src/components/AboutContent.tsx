interface AboutData {
  title: string;
  description: string;
}

const AboutContent = () => {
  const aboutInfo: AboutData[] = [
    { title: "Name", description: "Your Name" },
    { title: "Profession", description: "Your Profession" },
    { title: "Hobbies", description: "Your Hobbies" },
    // Add more about info here
  ];

  return (
    <div className="h-[calc(100vh-4rem)] scrollbar-hide overflow-y-auto">
      <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-4 scrollbar-hide">
        {aboutInfo.map((info, index) => (
          <div className="relative h-0 pb-[56.25%] w-full p-4">
            <h2 className="absolute top-0 left-0 h-full w-full " key={index}>
              {info.title}
            </h2>
            <p className="absolute top-0 left-0 h-full w-full " key={index}>
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
