"use client";

import { Col } from "antd";
import Title from "antd/es/typography/Title";
import "../../app/globals.scss";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const menuItems = [
    { key: "Home", label: "Home", route: "./home" },
    { key: "Projects", label: "Projects", route: "./projects" },
  ];
  return (
    <>
      <div className="navbar-container">
        <div className="custom-navbar">
          {menuItems.map((item: any, index: number) => (
            <Title
              level={5}
              key={index}
              style={{ color: "white", margin: 0, cursor: "pointer" }}
              onClick={() => route.push(item.route)}
            >
              {item.label}
            </Title>
          ))}
        </div>
      </div>
      <Col style={{ marginTop: "100px" }}>{children}</Col>

      <div className="footer-container">
        <Title>footer</Title>
      </div>
    </>
  );
}
