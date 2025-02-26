import { Card, Col, Row, Tag } from "antd";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TechnologyTabs from "./TechnologyTabs";

interface Project {
  id: number;
  title: string;
  thumbnailPath: string;
  link: string;
  technologies: string[];
}

interface Props {
  projects: Project[];
}

const ProjectsSection = ({ projects }: Props) => {
  const route = useRouter();

  return (
    <Row
      style={{ columnGap: "40px", rowGap: "30px", justifyContent: "center" }}
    >
      {projects.map((project: Project, index: number) => (
        <Row key={index} style={{ width: "300px" }}>
          <Card
            hoverable
            style={{ width: "300px", height: "300px" }}
            onClick={() => {
              route.push(`../../pages/projects/${project.id}`);
            }}
          >
            <div className="project-thumbnail">
              <Image
                src={
                  !!project.thumbnailPath.length
                    ? project.thumbnailPath
                    : "/no-project-image.png"
                }
                className="thumbnail-pic"
                alt="project-pic"
                width={150}
                height={150}
                unoptimized={true}
              />
            </div>
          </Card>
          <Title style={{ marginTop: 10, verticalAlign: "text-top" }} level={4}>
            {project.title}
          </Title>

          <TechnologyTabs technologies={project.technologies} />
        </Row>
      ))}
    </Row>
  );
};

export default ProjectsSection;
