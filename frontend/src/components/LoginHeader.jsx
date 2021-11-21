import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
const links = [
  { text: "home", href: "https://www.hauntedhamsters.io" },
  { text: "team", href: "https://www.hauntedhamsters.io#team" },
  { text: "roadmap", href: "https://www.hauntedhamsters.io#roadmap" },
  { text: "marketplace", href: "https://entrepot.app/marketplace/hauntedhamsters" },
];
export default function LoginHeader() {
  return (
    <div className="my-container flex items-center justify-between">
      <Link to="/">
        {" "}
        <img src="assets/logo.png" alt="logo" />
      </Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <a key={link.text} className="text-white capitalize font-bold" href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
