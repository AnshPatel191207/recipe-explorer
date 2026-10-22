import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return <><Navbar /><main className="recipe-container about-page"><div className="breadcrumbs"><Link href="/recipes">Home</Link><span>/</span>About</div><span className="recipe-eyebrow">THE EVERYDAY RECIPE NOTEBOOK</span><h1>Good food, clearly documented.</h1><p>Everyday Recipes is a frontend practice project for browsing culinary formulas, exploring cuisines, and documenting repeatable kitchen methods.</p><div className="about-cards"><article><b>01</b><h2>Explore</h2><p>Browse recipes by cuisine, category, and preparation time.</p></article><article><b>02</b><h2>Understand</h2><p>Review ingredients, yields, and sequential cooking steps.</p></article><article><b>03</b><h2>Document</h2><p>Create a local draft in Recipe Studio without a backend.</p></article></div></main><footer className="site-footer">● © 2025 Everyday Recipes. Functional culinary notebook.<nav><Link href="/recipes">Recipes</Link><Link href="/recipes/cuisine">Cuisines</Link><Link href="/editor">Recipe Studio</Link></nav></footer></>;
}
