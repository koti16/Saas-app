"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learning Companions", href: "/companions" },
];

export default function NavItems() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition ${
              isActive
                ? "font-semibold text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}