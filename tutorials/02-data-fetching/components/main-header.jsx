import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
