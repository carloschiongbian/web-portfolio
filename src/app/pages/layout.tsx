"use client";

import { Col } from "antd";
import Title from "antd/es/typography/Title";
import "../../app/globals.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const menuItems = [{ key: "Home", label: "Home", route: "home" }];

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
      <footer
        className="footer-container"
        style={{
          paddingBlock: "40px",
          backgroundColor: "black",
          marginTop: "100px",
          left: 0,
          // bottom: 0,
          width: "100%",
          position: "absolute",
          zIndex: 99999,
        }}
      >
        <Title>footer</Title>
      </footer>
    </>
  );
}
