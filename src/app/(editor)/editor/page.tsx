"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { recipes } from "@/data/recipes";

type IngredientRow = { quantity: string; name: string };
type StepRow = { title: string; instruction: string };
const emptyIngredient = (): IngredientRow => ({ quantity: "", name: "" });
const emptyStep = (): StepRow => ({ title: "", instruction: "" });

export default function RecipeEditorPage() {
  const [title, setTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [prepTime, setPrepTime] = useState("25");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { quantity: "400g", name: "Extra-firm tofu, drained and pressed" },
    { quantity: "2 tbsp", name: "Toasted sesame oil" },
    { quantity: "1 tbsp", name: "Fresh grated ginger root" },
  ]);
  const [steps, setSteps] = useState<StepRow[]>([
    { title: "Prepare ingredients", instruction: "Measure and prepare all ingredients before cooking." },
  ]);
  const [message, setMessage] = useState("Unsaved Changes");

  useEffect(() => {
    const saved = localStorage.getItem("everyday-recipe-draft");
    if (!saved) return;
    try {
      const draft = JSON.parse(saved);
      setTitle(draft.title ?? ""); setCuisine(draft.cuisine ?? "");
      setPrepTime(draft.prepTime ?? "25"); setDifficulty(draft.difficulty ?? "Easy");
      setDescription(draft.description ?? "");
      setIngredients(draft.ingredients?.length ? draft.ingredients : [emptyIngredient()]);
      setSteps(draft.steps?.length ? draft.steps : [emptyStep()]);
      setMessage("Draft restored locally");
    } catch { localStorage.removeItem("everyday-recipe-draft"); }
  }, []);

  function saveDraft(publish = false) {
    const draft = { title, cuisine, prepTime, difficulty, description, ingredients, steps, published: publish, updatedAt: new Date().toISOString() };
    localStorage.setItem("everyday-recipe-draft", JSON.stringify(draft));
    setMessage(publish ? "Published locally — demo only" : "Draft saved locally");
  }

  return (
    <div className="studio-layout">
      <aside className="studio-sidebar">
        <Link href="/recipes" className="studio-logo"><b>ER</b><span><strong>Recipe Studio</strong><small>v1.0 Editor Mode</small></span></Link>
        <nav className="studio-menu"><a className="selected" href="#editor">▤　Editor</a><a href="#drafts" onClick={() => setMessage("Your current draft is stored in this browser")}>▢　Drafts <i>1</i></a><a href="#settings" onClick={() => setMessage("Settings are not required for this local demo")}>☷　Settings</a></nav>
        <Link className="studio-back" href="/recipes">←　Back to Explorer</Link>
        <div className="studio-side-bottom"><span>▧　Documentation</span><small>© 2025 Everyday Recipes</small></div>
      </aside>
      <main className="studio-main" id="editor">
        <div className="studio-topline"><span>Studio　/　New Recipe Draft</span><span className="draft-status">{message}</span></div>
        <header className="studio-title"><h1>Create Recipe</h1><p>Enter recipe parameters, ingredients, and sequential preparation instructions for the culinary index.</p></header>
        <form onSubmit={(e) => { e.preventDefault(); saveDraft(true); }}>
          <section className="studio-panel"><div className="studio-panel-heading"><h2>Recipe Parameters</h2></div>
            <div className="studio-form-grid">
              <label className="span-two">Recipe Title <em>*</em><input required value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Sesame Ginger Tofu Rice Bowl" /></label>
              <label>Cuisine <em>*</em><select required value={cuisine} onChange={e => setCuisine(e.target.value)}><option value="">Select regional style</option>{["Asian","Mediterranean","European","Japanese","Indian","Italian","Latin American","Middle Eastern"].map(x => <option key={x}>{x}</option>)}</select></label>
              <label>Prep Time (minutes) <em>*</em><div className="input-unit"><input type="number" min="1" required value={prepTime} onChange={e => setPrepTime(e.target.value)} /><span>min</span></div></label>
              <label>Difficulty Level <em>*</em><select value={difficulty} onChange={e => setDifficulty(e.target.value)}><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
              <label className="span-two">Short Description<textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Brief summary of flavor profile and key technique..." rows={3}/><small>Recommended 100–140 characters for indexing notebooks.</small></label>
            </div>
          </section>
          <section className="studio-panel"><div className="studio-panel-heading"><div><h2>Ingredients List</h2><p>Define quantities, units, and ingredient naming.</p></div><span>{ingredients.length} Items Added</span></div>
            <div className="ingredient-editor">{ingredients.map((row, i) => <div className="ingredient-row" key={i}><span className="drag-dots">⠿</span><input aria-label={`Ingredient ${i + 1} quantity`} value={row.quantity} onChange={e => setIngredients(old => old.map((r,j) => i === j ? {...r, quantity:e.target.value} : r))} placeholder="400g"/><input aria-label={`Ingredient ${i + 1} name`} value={row.name} onChange={e => setIngredients(old => old.map((r,j) => i === j ? {...r, name:e.target.value} : r))} placeholder="Ingredient name"/><button type="button" className="remove-row" aria-label="Remove ingredient" onClick={() => setIngredients(old => old.filter((_,j) => i !== j))}>×</button></div>)}</div>
            <button type="button" className="add-row" onClick={() => setIngredients(old => [...old, emptyIngredient()])}>＋　Add Row</button>
          </section>
          <section className="studio-panel"><div className="studio-panel-heading"><div><h2>Methodology &amp; Execution</h2><p>Add clear sequential preparation steps.</p></div><span>{steps.length} Steps</span></div>
            {steps.map((step, i) => <div className="step-editor" key={i}><span>{String(i + 1).padStart(2,"0")}</span><div><input value={step.title} onChange={e => setSteps(old => old.map((r,j) => i === j ? {...r,title:e.target.value} : r))} placeholder="Step title"/><textarea value={step.instruction} onChange={e => setSteps(old => old.map((r,j) => i === j ? {...r,instruction:e.target.value} : r))} placeholder="Describe this preparation step..." rows={2}/></div><button type="button" className="remove-row" onClick={() => setSteps(old => old.filter((_,j) => i !== j))} aria-label="Remove step">×</button></div>)}
            <button type="button" className="add-row" onClick={() => setSteps(old => [...old, emptyStep()])}>＋　Add Step</button>
          </section>
          <div className="studio-actions"><span>Auto-save is simulated locally in this browser.</span><div><button type="button" className="secondary-button" onClick={() => saveDraft(false)}>Save Draft</button><button type="submit" className="primary-button">⇧　Publish Recipe</button></div></div>
        </form>
      </main>
    </div>
  );
}
