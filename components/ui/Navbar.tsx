import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        SaaS App
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/companions">Companions</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </div>
    </nav>
  );
}