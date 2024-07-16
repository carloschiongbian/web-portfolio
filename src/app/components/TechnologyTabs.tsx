import { Col, Row, Tag } from "antd";
import { CSSProperties } from "react";

interface Props {
  tabContainerStyles?: CSSProperties;
  technologies: string[] | undefined;
}

const TechnologyTabs = ({ technologies, tabContainerStyles }: Props) => {
  const tagColors: any = {
    javascript: "volcano",
    react: "magenta",
    scss: "blue",
    html: "green",
    typescript: "red",
    css: "pink",
  };
  return (
    <Row style={{ width: "100%", rowGap: "5px", ...tabContainerStyles }}>
      {technologies?.map((tech: string, index: number) => (
        <Col key={index}>
          <Tag color={tagColors[tech.toLowerCase()] ?? "orange"}>{tech}</Tag>
        </Col>
      ))}
    </Row>
  );
};

export default TechnologyTabs;
