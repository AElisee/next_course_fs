import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";

const portfolio = () => {
  const title = "Portfolio dev, tous les dernirs projets réalisés";
  const description = "projects javascript, react";

  console.log(projects);
  return (
    <div>
      <Meta title={title} description={description} />
      <h2>portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="project/[id]" as={`project/${project.id}`}>
              <a>{project.title} ➡️</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default portfolio;
