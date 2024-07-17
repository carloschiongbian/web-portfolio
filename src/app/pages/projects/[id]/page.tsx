"use client";

import { Button, Carousel, Col, Row, Skeleton, Spin, Typography } from "antd";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PROJECT_DATA } from "./data";
import Image from "next/image";
import TechnologyTabs from "@/app/components/TechnologyTabs";

const { Title, Paragraph } = Typography;

interface Project {
  id: number;
  title: string;
  thumbnailPath: string;
  link: string;
  technologies: string[];
  content: string;
  repository: string;
  video: string | null;
}

const Projects = () => {
  const params = useParams();
  const [demoLink, setDemoLink] = useState<string | undefined>(undefined);
  const [repositoryLink, setRepositoryLink] = useState<string | undefined>(
    undefined
  );
  const [data, setData] = useState<Project | null>(null);
  const projectId = params?.id;

  useEffect(() => {
    const response = PROJECT_DATA[`${projectId}`];

    setData(response ?? null);
    setDemoLink(response ? response.link : undefined);
    setRepositoryLink(response ? response.repository : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title level={1}>{data?.title}</Title>

      {data?.video && (
        <Carousel
          style={{
            display: "flex",
            borderRadius: "10px",
            flexDirection: "row",
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Image
              className="project-image"
              src={data?.thumbnailPath}
              alt="thumbnail"
              width={1200}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              unoptimized={true}
            />
          </div>
          <div>
            <video width="100%" height="100%" controls preload="none">
              <source src={data?.video} type="video/mp4" />
              <track src={data?.video} srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel>
      )}

      {data?.video === null && (
        <Image
          className="project-image"
          src={data?.thumbnailPath}
          alt="thumbnail"
          width={1200}
          height={450}
          style={{ width: "100%", objectFit: "cover" }}
        />
      )}
      <Row
        // wrap={false}
        style={{
          width: "100%",
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        <TechnologyTabs
          tabContainerStyles={{ width: "fit-content" }}
          technologies={data?.technologies}
        />

        <Row
          className="link-buttons-web"
          wrap={false}
          style={{ columnGap: "10px" }}
        >
          {repositoryLink && (
            <Button
              onClick={() => window?.open(repositoryLink, "_blank")?.focus()}
            >
              Repository
            </Button>
          )}
          {demoLink && (
            <Button onClick={() => window?.open(demoLink, "_blank")?.focus()}>
              Demo
            </Button>
          )}
        </Row>
      </Row>
      <Row>
        <Paragraph
          style={{
            width: "100%",
            marginTop: "20px",
            textIndent: "50px",
            textAlign: "justify",
            fontSize: "16px",
          }}
        >
          {data?.content}
        </Paragraph>
      </Row>
    </>
  );
};

export default Projects;
