import { Col, Typography } from "antd";
const { Title, Text } = Typography;

interface Institution {
  institution: string;
  program: string;
  yearStart: string | number;
  yearEnd: string | number;
}

interface Props {
  institutions: Institution[];
}

const EducationTabs = ({ institutions }: Props) => {
  return (
    <>
      {institutions.map((data: Institution, index: number) => (
        <Col className={`education-container-${index}`} key={index}>
          <Col>
            <Text style={{ fontSize: "18px", fontWeight: 600 }}>
              {data.institution}
            </Text>
          </Col>
          <Col>
            <Text style={{ fontSize: "18px" }}>
              Bachelor of Science in {data.program}
            </Text>
          </Col>
          <Col>
            <Text style={{ fontSize: "18px" }}>
              {data.yearStart} - {data.yearEnd}
            </Text>
          </Col>
        </Col>
      ))}
    </>
  );
};

export default EducationTabs;
