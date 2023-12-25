function Photos() {
  // This is just dummy data, replace it with your actual projects data
  const projects = [
    { name: "Project 1", description: "This is Project 1" },
    { name: "Project 2", description: "This is Project 2" },
    { name: "Project 3", description: "This is Project 3" },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos;