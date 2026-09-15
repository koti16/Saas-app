import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learning Companions", href: "/companions" },
];

export default function NavItems() {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}