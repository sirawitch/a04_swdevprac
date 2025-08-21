import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopMenu() {
  return (
    <header style={{ width: "100%", borderBottom: "1px solid #ccc",backgroundColor:"lightyellow"}}>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end", // ดันทั้งหมดไปขวา
          alignItems: "center", // จัดให้อยู่บรรทัดเดียวกัน
          gap: "8px", // เว้นระยะ Booking กับ Logo
          padding: "10px 20px",
        }}
      >
        <a
          href="/booking"
          style={{ fontWeight: "bold", color: "#333", textDecoration: "none" }}
        >
          Booking
        </a>
        <img src="/img/logo.png" alt="Company Logo" width="30" height="30" />
      </nav>
    </header>
  );
}
