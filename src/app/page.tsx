"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export default function App() {
  useEffect(() => {
    redirect("./pages/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
