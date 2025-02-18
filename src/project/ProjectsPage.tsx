import React from "react";
import { MOCK_PROJECTS } from "./MockProject";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
