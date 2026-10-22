"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const recipesActive = pathname === "/recipes" || pathname.startsWith("/recipes/") && !pathname.startsWith("/recipes/cuisine");
  const cuisinesActive = pathname.startsWith("/recipes/cuisine");
  return <header className="recipe-navbar"><nav className="recipe-nav-inner">
    <Link href="/recipes" className="recipe-brand"><span aria-hidden="true">●</span>Everyday Recipes</Link>
    <div className="recipe-nav-links"><Link className={recipesActive ? "active" : ""} href="/recipes">Recipes</Link><Link className={cuisinesActive ? "active" : ""} href="/recipes/cuisine">Cuisines</Link><Link className={pathname === "/about" ? "active" : ""} href="/about">About</Link></div>
    <Link href="/editor" className="new-recipe-link">＋ New Recipe</Link>
  </nav></header>;
}
