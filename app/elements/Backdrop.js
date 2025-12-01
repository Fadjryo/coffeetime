"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Backdrop({ children }) {
  const router = useRouter();
  return (
    <div className="modalBackdrop" onClick={router.back}>
      {children}
    </div>
  );
}
