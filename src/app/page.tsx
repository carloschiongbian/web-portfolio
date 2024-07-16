"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const route = useRouter();

  useEffect(() => {
    route.push("./pages/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
