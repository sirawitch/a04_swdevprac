import Link from "next/link";
import React from "react";

interface TopMenuItemProps {
  href: string;
  text: string;
}

export default function TopMenuItem({ href, text }: TopMenuItemProps) {
  return (
    <Link
      href={href}
    >
      {text}
    </Link>
  );
}
