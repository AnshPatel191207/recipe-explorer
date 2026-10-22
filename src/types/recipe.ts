export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  cuisine: string;
  category: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
}
