import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="flex min-h-20 items-center justify-between border-b bg-white px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/images/logo.svg"
          alt="Converso"
          width={46}
          height={44}
          priority
        />
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-6 md:flex">
        <NavItems />

        <Link
          href="/sign-in"
          className="rounded-md border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
        >
          Sign in
        </Link>
      </div>

      {/* Mobile navigation */}
      <div className="flex items-center md:hidden">
        <Link
          href="/sign-in"
          className="rounded-md border border-black px-4 py-2 text-sm font-medium"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}