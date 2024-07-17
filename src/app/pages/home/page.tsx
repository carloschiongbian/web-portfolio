"use client";

import {
  LinkedinOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Menu,
  Row,
  Switch,
  Timeline,
  Typography,
} from "antd";
import { useState } from "react";
import Image from "next/image";
import EducationTabs from "@/app/components/EducationTabs";
import ProjectCard from "@/app/components/ProjectCard";
import { experience, institutions, projects } from "./data";

const { Title, Text } = Typography;

const Home = () => {
  const [showProjects, setShowProjects] = useState<boolean>(true);
  const [showEducation, setShowEducation] = useState<boolean>(true);
  const [showExperience, setShowExperience] = useState<boolean>(true);
  const linkedInLink = "https://www.linkedin.com/in/julianchiongbian";
  const switchItems = [
    {
      key: "projects",
      checkedLabel: "Showing Projects",
      unCheckedLabel: "Hiding Projects",
      setter: setShowProjects,
      status: showProjects,
    },
    {
      key: "experience",
      checkedLabel: "Showing Experience",
      unCheckedLabel: "Hiding Experience",
      setter: setShowExperience,
      status: showExperience,
    },
    {
      key: "education",
      checkedLabel: "Showing Education",
      unCheckedLabel: "Hiding Education",
      setter: setShowEducation,
      status: showEducation,
    },
  ];

  return (
    <>
      <div className="switch-container">
        <Row className="custom-switch">
          {switchItems.map((item: any, index: number) => (
            <Row
              key={index}
              style={{ justifyContent: "space-between", columnGap: "20px" }}
            >
              <Title style={{ margin: 0 }} level={5}>
                {item.checkedLabel}
              </Title>
              <Switch
                style={{
                  backgroundColor: item.status ? "#543310" : "red",
                  outline: "none",
                }}
                defaultChecked
                onChange={(event: boolean) => item.setter(event)}
              />
            </Row>
          ))}
        </Row>
      </div>

      {/* Header */}
      {/* Header Content */}
      <Title className="developer-name">Julian Chiongbian</Title>
      <Title level={3}>Software Engineer</Title>
      <Row style={{ width: "100%" }} className="header-container">
        <Col
          style={{
            // width: "50%",
            textAlign: "left",
          }}
        >
          {/* Sub-Header Content */}
          <Row className="sub-header">
            <Avatar className="avatar-mobile" size={100}>
              <Image
                src={"/avatar-photo.jpeg"}
                className="avatar-pic-mobile"
                alt="avatar-pic-mobile"
                width={100}
                height={100}
              />
            </Avatar>
            <Text className="sub-header-content">
              A software engineer with 3 years of creating interactive software
              in the frontend, backend, and database side of things 🎉 Helping
              people out with their software needs is something I enjoy. I have
              prepared myself for a path of lifelong learning, and helping
              people move forward one code at a time.
            </Text>
          </Row>
        </Col>

        <Row
          className="avatar"
          style={{ width: "100%", justifyContent: "space-between" }}
          wrap={false}
        >
          <Row className="container-2" wrap={false}>
            <Text className="location">📍 Cebu, Philippines</Text>
          </Row>
          <Avatar className="avatar-web" size={150}>
            <Image
              src={"/avatar-photo.jpeg"}
              className="avatar-pic"
              alt="avatar-pic"
              width={150}
              height={150}
            />
          </Avatar>
        </Row>
      </Row>
      <Col className="contacts-container">
        <Text className="contact">Connect with me</Text>
        <Row className="links-container" wrap={false}>
          <LinkedinOutlined
            onClick={() => window?.open(linkedInLink, "_blank")?.focus()}
          />
        </Row>
      </Col>

      {/* Projects */}
      {showProjects && (
        <Row>
          <Divider style={{ fontSize: "27px" }}>Projects</Divider>
          <ProjectCard projects={projects} />
        </Row>
      )}

      {showExperience && (
        <Col style={{ width: "100%", textAlign: "left", marginTop: "40px" }}>
          <Divider style={{ fontSize: "27px" }}>Experience</Divider>

          <Timeline
            className="timeline"
            mode="alternate"
            items={experience}
            style={{ margin: 0 }}
          />
        </Col>
      )}

      {/* Education */}
      {showEducation && (
        <Col style={{ width: "100%", textAlign: "center" }}>
          <Divider style={{ fontSize: "27px" }}>Education</Divider>
          <EducationTabs institutions={institutions} />
        </Col>
      )}
    </>
  );
};

export default Home;
