import React from "react";
import { ProjectPreview } from "./ProjectPreview";

const Projects = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
      <ProjectPreview
        name="Kiloin App"
        description="Next Gen Rubish App"
        imageUrl="/project-1.png"
        bgColor="#685cdd"
        dark
      />

      <ProjectPreview
        name="Bitcoin"
        description="Crypto project"
        imageUrl="/project-2.png"
        bgColor="#313442"
        dark
      />

      <ProjectPreview
        name="Admin Football App"
        description="Next Gen Football App"
        imageUrl="/project-3.png"
      />

      <ProjectPreview
        name="Admin OnBoarding"
        description="Incarse user engagement"
        imageUrl="/project-3.png"
      />

      <ProjectPreview
        name="Project Dashboard POS"
        description="Project Management App"
        bgColor="#4e4e56"
        dark
      />

      <ProjectPreview
        name="News Football App"
        description="News Football aggregatot app"
        imageUrl="/project-2.png"
        bgColor="#171717"
        dark
      />
    </section>
  );
};

export default Projects;
