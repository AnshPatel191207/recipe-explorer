import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import RecipeListing from "@/components/RecipeListing";
import { recipes } from "@/data/recipes";

type Props = { params: Promise<{ slug?: string[] }> };
const cuisineSlugs: Record<string, string> = {
  asian: "Asian", japanese: "Japanese", mediterranean: "Mediterranean",
  european: "European", indian: "Indian", italian: "Italian",
  "latin-american": "Latin American", "middle-eastern": "Middle Eastern"
};

export default async function RecipesPage({ params }: Props) {
  const { slug = [] } = await params;
  if (slug.length === 0) return <>
    <Navbar />
    <main className="recipe-container">
      <div className="breadcrumbs">Home <span>/</span> Recipes</div>
      <header className="recipe-page-heading listing-heading">
        <div><h1>All recipes</h1><p>Browse everyday culinary formulas and kitchen staples by cuisine and prep time.</p></div>
        <span className="entry-count">▤ Showing {recipes.length} notebook entries</span>
      </header>
      <RecipeListing />
    </main>
    <footer className="site-footer"><div>● © 2025 Everyday Recipes. Functional culinary notebook.</div><nav><Link href="/recipes">Recipes</Link><Link href="/recipes/cuisine">Cuisines</Link><Link href="/editor">Recipe Studio</Link></nav></footer>
  </>;

  if (slug.length === 1 && slug[0] === "cuisine") return <>
    <Navbar /><main className="recipe-container catalog-page">
      <div className="breadcrumbs"><Link href="/recipes">Recipes</Link><span>/</span>All Categories</div>
      <header className="recipe-page-heading"><h1>Recipe Catalog Index</h1><p>Complete taxonomy index of all cataloged everyday dishes. Displaying all recipes when no specific category or path segment is provided.</p></header>
      <div className="category-chips"><Link className="chip active" href="/recipes">All <small>8</small></Link>{["Quick Meals","Plant-Based","Baking & Grains","Soups & Stews"].map(category => <Link className="chip" key={category} href={`/recipes/category/${category.toLowerCase().replaceAll(" & ","-").replaceAll(" ","-")}`}>{category} <small>{recipes.filter(r => r.category === category).length}</small></Link>)}</div>
      <div className="catalog-note"><span>ⓘ</span><div><strong>Next.js Routing Paradigm: [[...slug]] Architecture</strong><p>The optional catch-all route matches the recipe catalog root when slug is undefined and nested category paths when segments are provided.</p></div></div>
      {["Quick Meals","Plant-Based","Baking & Grains","Soups & Stews"].map(category => { const items = recipes.filter(r => r.category === category); return <section className="catalog-section" key={category}><div className="section-heading"><div><h2>{category} (&lt;25m)</h2><small>{items.length} entries</small></div><Link href={`/recipes/category/${category.toLowerCase().replaceAll(" & ","-").replaceAll(" ","-")}`}>View segment →</Link></div><div className="catalog-recipe-grid">{(items.length ? items : recipes.slice(0, 3)).slice(0,3).map(recipe => <RecipeCard key={recipe.slug} recipe={recipe} />)}</div></section> })}
      <div className="catalog-note route-note"><span>⚑</span><div><strong>Test nested dynamic route sub-path</strong><p>Simulate how Next.js populates the params array when visiting specific sub-paths.</p></div><Link href="/recipes/category/quick-meals">/recipes/category/quick-meals</Link><Link href="/recipes/category/baking-grains">/recipes/category/baking-grains</Link></div>
    </main><footer className="site-footer">© 2025 Everyday Recipes. Functional culinary notebook.<nav><Link href="/recipes">Recipes</Link><Link href="/recipes/cuisine">Cuisines</Link><Link href="/editor">Recipe Studio</Link></nav></footer>
  </>;

  if (slug.length === 2 && slug[0] === "category") {
    const categoryNames: Record<string, string> = { "quick-meals": "Quick Meals", "plant-based": "Plant-Based", "baking-grains": "Baking & Grains", "soups-stews": "Soups & Stews" };
    const category = categoryNames[slug[1]];
    if (!category) notFound();
    const items = recipes.filter(r => r.category === category);
    return <><Navbar /><main className="recipe-container"><div className="breadcrumbs"><Link href="/recipes">Recipes</Link><span>/</span><Link href="/recipes/cuisine">Catalog</Link><span>/</span>{category}</div><header className="recipe-page-heading"><span className="recipe-eyebrow">RECIPE SEGMENT · {items.length} ENTRIES</span><h1>{category}</h1><p>Browse recipes filed in the {category.toLowerCase()} notebook segment.</p></header><section className="recipe-grid">{items.map(recipe => <RecipeCard key={recipe.slug} recipe={recipe} />)}</section></main><footer className="site-footer">© 2025 Everyday Recipes. Functional culinary notebook.</footer></>;
  }

  if ((slug.length === 2 || slug.length === 3) && slug[0] === "cuisine" && cuisineSlugs[slug[1]]) {
    const cuisine = cuisineSlugs[slug[1]];
    const items = recipes.filter(r => r.cuisine === cuisine || (cuisine === "Asian" && ["Japanese", "Asian"].includes(r.cuisine)));
    return <><Navbar /><main className="recipe-container cuisine-detail-page">
      <div className="breadcrumbs"><Link href="/recipes/cuisine">Cuisines</Link><span>/</span>{cuisine === "Asian" ? "Asian" : cuisine}<span>/</span>{cuisine === "Asian" ? "East Asian" : "Recipes"}</div>
      <header className="cuisine-hero"><div><span className="recipe-eyebrow">REGIONAL DOMAIN · {cuisine === "Asian" ? "55" : items.length} CATALOGED FORMULAS</span><h1>{cuisine === "Asian" ? "East Asian Cuisines" : `${cuisine} Cuisine`}</h1><p>Traditional cooking traditions and foundational flavor profiles centered on balanced seasonings, texture, and repeatable kitchen techniques.</p></div><div className="cuisine-hero-actions"><Link href="/recipes/cuisine">↑ Parent: All Cuisines</Link><Link href="/recipes">Root: All Recipes</Link></div></header>
      <div className="section-heading"><h2>Sub-Regional Traditions</h2><span>4 Active Classifications</span></div><div className="regional-grid">{(cuisine === "Asian" ? [{name:"Japanese Cuisine",count:14,desc:"Dashi bases, mirin, miso, and seasonal preservation techniques."},{name:"Chinese Regional Styles",count:22,desc:"Wok aromatics, Sichuan peppercorn, and delicate dim sum techniques."},{name:"Korean Traditions",count:11,desc:"Gochujang fermentations, toasted sesame oil, and balanced banchan side dishes."},{name:"Taiwanese Night Market",count:8,desc:"Braised broths, scallion crisps, and fragrant five-spice oil infusions."}] : [{name:`${cuisine} Classics`,count:items.length,desc:`Foundational recipes and everyday techniques from ${cuisine}.`},{name:"Regional Favorites",count:items.length,desc:"Comforting recipes selected from the notebook."}]).map((item,i)=><article className="regional-card" key={item.name}><span className="mini-count">{item.count} RECIPES</span><span className="regional-arrow">↗</span><h3>{item.name}</h3><p>{item.desc}</p><div><small>{["Primary base: Kombu","Focus: Wok Hei","Focus: Fermentation","Base: Five-Spice"][i%4]}</small><Link href={i===0 && cuisine === "Asian" ? "/recipes/cuisine/japanese" : `/recipes/cuisine/${cuisine.toLowerCase().replaceAll(" ","-")}`}>Explore →</Link></div></article>)}</div>
      <div className="section-heading featured-heading"><div><h2>Featured {cuisine === "Asian" ? "East Asian" : cuisine} Formulas</h2><p>Validated notebook entries for home kitchen workflows.</p></div><span>Sorted by: Foundation</span></div><section className="featured-grid">{(items.length ? items : recipes.slice(0,3)).slice(0,3).map(recipe => <RecipeCard key={recipe.slug} recipe={recipe} />)}</section><aside className="pantry-note"><span>PANTRY STANDARD</span><h3>Foundational Umami Index</h3><p>All recipes in Everyday Recipes favor clear measurements, balanced seasoning, and practical preparation steps.</p><Link href="/about">Read Pantry Guide</Link></aside>
    </main><footer className="site-footer">© 2025 Everyday Recipes. Functional culinary notebook.<nav><Link href="/recipes">Recipes</Link><Link href="/recipes/cuisine">Cuisines</Link><Link href="/editor">Recipe Studio</Link></nav></footer></>;
  }

  if (slug.length === 1) {
    const recipe = recipes.find(item => item.slug === slug[0]);
    if (!recipe) notFound();
    return <><Navbar /><main className="recipe-container">
      <div className="breadcrumbs"><Link href="/recipes">Recipes</Link><span>/</span>{recipe.cuisine}<span>/</span>{recipe.title}<Link className="crumb-back" href="/recipes">← Back to recipes</Link></div>
      <header className="detail-hero"><div><span className="recipe-eyebrow">Entry #{recipe.id.replace("REC-", "")} · CULINARY NOTEBOOK</span><h1>{recipe.title}</h1><p>{recipe.description}</p><div className="detail-meta"><span>Cuisine: <b>{recipe.cuisine}</b></span><span>Prep time: <b>{recipe.prepTime} mins</b></span><span>Difficulty: <b>{recipe.difficulty}</b></span><span>Servings: <b>{recipe.servings} portions</b></span></div></div><figure><img src={recipe.image} alt={recipe.title}/><figcaption>FIG 1.0 — Plated preparation</figcaption></figure></header>
      <div className="detail-columns"><section className="ingredients-panel"><div className="panel-heading"><h2>Ingredients</h2><span>{recipe.ingredients.length} Items</span></div><div className="yield-note">Yield: {recipe.servings} portions <span>Scale: 1.0×</span></div><ul>{recipe.ingredients.map(item => <li key={item}><label><input type="checkbox"/><span>{item}</span></label></li>)}</ul><p className="tip">Tip: Check off items as you mise-en-place.</p></section>
      <section className="method-panel"><div className="panel-heading"><h2>Methodology &amp; Execution</h2><span>{recipe.instructions.length} Sequential Steps</span></div><ol>{recipe.instructions.map((step,i) => <li key={step}><span className="step-number">{String(i+1).padStart(2,"0")}</span><p>{step}</p></li>)}</ol><div className="verified">● Execution guide for home kitchen <Link href="/editor">Edit formulation →</Link></div></section></div>
    </main><footer className="site-footer">© 2025 Everyday Recipes. Functional culinary notebook.</footer></>;
  }
  notFound();
}
