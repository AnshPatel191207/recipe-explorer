"use client";
import { useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export default function RecipeListing() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("recent");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = recipes.filter((recipe) =>
      [recipe.title, recipe.description, recipe.cuisine, recipe.category, ...recipe.ingredients]
        .some((value) => value.toLowerCase().includes(q))
    );
    if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "time") result.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime));
    return result;
  }, [query, sort]);
  return <>
    <div className="listing-toolbar">
      <label className="search-field"><span aria-hidden="true">⌕</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search recipes or ingredients..." aria-label="Search recipes or ingredients" />
      </label>
      <label className="sort-field">Sort by:
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort recipes">
          <option value="recent">Most recent</option><option value="title">Recipe name</option><option value="time">Shortest time</option>
        </select>
      </label>
    </div>
    {filtered.length ? <section className="recipe-grid">{filtered.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}</section> :
      <div className="empty-state"><h2>No recipes found</h2><p>Try another recipe name or ingredient.</p></div>}
    <div className="pagination-row"><span>Page 1 of 1 — {filtered.length} formulas total</span>
      <div><button disabled>Previous</button><button className="page-current">1</button><button disabled>Next</button></div>
    </div>
  </>;
}
