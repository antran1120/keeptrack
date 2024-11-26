import { Project } from "./Project";
import React from "react";

function formatDescription(description: string) {
  return description.substring(0, 60) + "...";
}
interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}
function ProjectCart(props: ProjectCardProps) {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={props.project.imageUrl} alt={props.project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{props.project.name}</strong>
        </h5>
        <p>{formatDescription(props.project.description)}</p>
        <p>Budget: {props.project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit"></span>
          edit
        </button>
      </section>
    </div>
  );
}
export default ProjectCart;
