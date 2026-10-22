import Link from "next/link";
import type { Recipe } from "@/types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return <article className="recipe-card">
    <Link href={`/recipes/${recipe.slug}`} className="recipe-image-link" aria-label={`View ${recipe.title}`}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <span className="image-time">◷ {recipe.prepTime + recipe.cookTime} mins</span>
    </Link>
    <div className="recipe-card-content">
      <div className="recipe-tags"><span>{recipe.cuisine}</span><span>{recipe.difficulty}</span></div>
      <h2><Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link></h2>
      <p>{recipe.description}</p>
      <div className="recipe-card-bottom"><small>{recipe.id}</small><Link href={`/recipes/${recipe.slug}`} className="recipe-view-link">View recipe →</Link></div>
    </div>
  </article>;
}
