import { Card, Col, Row, Tag } from "antd";
import Title from "antd/es/typography/Title";

interface Project {
  title: string;
  thumbnailPath: string;
  link: string;
  technologies: string[];
}

interface Props {
  projects: Project[];
}

const ProjectCard = ({ projects }: Props) => {
  const tagColors: any = {
    javascript: "volcano",
    react: "magenta",
    scss: "blue",
    html: "green",
    typescript: "red",
    css: "pink",
  };
  return (
    <Row style={{ columnGap: "50px" }}>
      {projects.map((project: Project, index: number) => (
        <Row key={index} style={{ width: "300px" }}>
          <Card
            hoverable
            style={{ width: "300px", height: "300px" }}
            onClick={() => window?.open(project.link, "_blank")?.focus()}
          >
            <div
              className="project-thumbnail"
              style={{
                width: "100%",
                paddingTop: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                src={project.thumbnailPath}
              />
            </div>
          </Card>
          <Title level={4}>{project.title}</Title>
          <Row style={{ width: "100%", rowGap: "5px" }}>
            {project.technologies.map((tech: string, index: number) => (
              <Col key={index}>
                <Tag color={tagColors[tech.toLowerCase()] ?? "orange"}>
                  {tech}
                </Tag>
              </Col>
            ))}
          </Row>
        </Row>
      ))}
    </Row>
  );
};

export default ProjectCard;
