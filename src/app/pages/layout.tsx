"use client";

import { Button, Col, Menu, Row } from "antd";
import Title from "antd/es/typography/Title";
import { SendOutlined, MailOutlined } from "@ant-design/icons";
import "../../app/globals.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const menuItems = [{ key: "Home", label: "Home", route: "home" }];

  const items = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
    { key: "3", label: "Option 3" },
  ];
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div>
        <div className="navbar-container">
          <div className="custom-navbar">
            {menuItems.map((item: any, index: number) => (
              <Title
                level={5}
                key={index}
                style={{ color: "white", margin: 0, cursor: "pointer" }}
                onClick={() => route.push(`../../pages/${item.route}`)}
              >
                {item.label}
              </Title>
            ))}
          </div>
        </div>
        <Col style={{ marginTop: "100px" }}>{children}</Col>
      </div>

      <footer id="footer-container" style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <Title style={{ color: "white" }} level={2}>
              Want to work with me?
            </Title>
            <Row style={{ justifyContent: "center", columnGap: "10px" }}>
              <Button
                size="large"
                style={{
                  backgroundColor: "#543310",
                  color: "white",
                  outline: "none",
                  border: "none",
                  fontWeight: "500",
                }}
                iconPosition="end"
                icon={<SendOutlined style={{ fontSize: "20px" }} />}
                onClick={() =>
                  window
                    ?.open(
                      "https://www.linkedin.com/in/julianchiongbian",
                      "_blank"
                    )
                    ?.focus()
                }
              >
                DM me on LinkedIn
              </Button>
              <Button
                size="large"
                style={{
                  backgroundColor: "#543310",
                  color: "white",
                  outline: "none",
                  border: "none",
                  fontWeight: "500",
                }}
                iconPosition="end"
                icon={<MailOutlined style={{ fontSize: "20px" }} />}
                onClick={() =>
                  window
                    ?.open("mailto:carlosjulian.chiongbian@gmail.com", "#")
                    ?.focus()
                }
              >
                Send me an email
              </Button>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}
