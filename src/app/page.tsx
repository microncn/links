"use client";

import Link from "next/link";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/microncn",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/microncn",
  },
  {
    name: "X (formerly Twitter)",
    href: "https://x.com/microncn",
  },
];

export default async function Page() {
  return (
    <div className="max-w-[400px] w-full flex mx-auto flex-col space-y-4 h-screen justify-center px-4">
      <header className="text-center">
        <h1 className="text-white font-semibold">microncn</h1>
        <p className="text-neutral-400">Software Engineer</p>
      </header>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          className="bg-neutral-900 font-medium text-sm text-white rounded-md flex justify-center items-center py-3 ring-offset-2 ring-offset-black ring-1 ring-neutral-900 hover:bg-neutral-800 duration-200"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
