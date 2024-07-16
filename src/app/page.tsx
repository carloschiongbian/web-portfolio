"use client";

import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Row, Switch, Timeline, Typography } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import EducationTabs from "@/app/components/EducationTabs";
import ProjectCard from "@/app/components/ProjectCard";
import Home from "./pages/home/page";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function App() {
  const route = useRouter();

  useEffect(() => {
    route.push("./pages/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
