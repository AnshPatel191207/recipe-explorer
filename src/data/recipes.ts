import type { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "REC-01", slug: "vegetable-noodles", title: "Vegetable Noodles",
    description: "Tender stir-fried ribbons with ginger-tamari glaze, scallions, and seasonal vegetables.",
    cuisine: "Asian", category: "Quick Meals", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900",
    prepTime: 10, cookTime: 10, servings: 2, difficulty: "Easy",
    ingredients: ["200g wheat noodles or soba", "1 tbsp toasted sesame oil", "1 small carrot, julienned", "1 red bell pepper, thinly sliced", "2 cups shredded savoy cabbage", "2 scallions, diagonally sliced", "2 tbsp low-sodium soy sauce", "1 tbsp dark soy sauce", "1 tsp grated ginger"],
    instructions: ["Par-boil and oil noodles. Cook noodles in salted boiling water until al dente, drain and toss lightly with half the sesame oil.", "Preheat wok. Heat a wide skillet or wok over medium-high heat with remaining oil until shimmering.", "Flash aromatics and root vegetables. Add ginger, carrot, and bell pepper; stir-fry briskly for 3 minutes until tender-crisp.", "Incorporate greens and seasoning reduction. Fold in the shredded cabbage and noodles; pour in light and dark soy sauces.", "Glaze reduction and finish. Toss continuously for 2 minutes to glaze evenly, finish with sliced scallions and remove from heat."]
  },
  {
    id: "REC-02", slug: "rustic-tomato-galette", title: "Rustic Tomato Galette",
    description: "Flaky spelt dough folded over slow-roasted heirloom tomatoes, herbs, and creamy cheese.",
    cuisine: "Mediterranean", category: "Baking & Grains", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900",
    prepTime: 20, cookTime: 25, servings: 4, difficulty: "Medium",
    ingredients: ["1 sheet chilled pastry", "3 heirloom tomatoes", "100g ricotta", "2 tbsp olive oil", "Fresh thyme", "Sea salt and black pepper"],
    instructions: ["Heat oven to 200°C and line a baking tray.", "Slice tomatoes and pat dry to remove excess moisture.", "Spread ricotta over pastry, leaving a border.", "Arrange tomatoes, season, and fold the pastry edges inward.", "Brush with olive oil and bake until golden."]
  },
  {
    id: "REC-03", slug: "lemon-herb-roast-chicken", title: "Lemon Herb Roast Chicken",
    description: "Crisp skin infused with crushed garlic, lemon peel, cracked pepper, and garden herbs.",
    cuisine: "European", category: "Main Course", image: "https://images.unsplash.com/photo-1532634896-26909d0d4b2b?w=900",
    prepTime: 15, cookTime: 35, servings: 4, difficulty: "Medium",
    ingredients: ["4 chicken pieces", "1 lemon", "3 garlic cloves", "2 tbsp olive oil", "Rosemary and thyme", "Salt and cracked pepper"],
    instructions: ["Preheat oven to 200°C.", "Mix olive oil, lemon zest, crushed garlic, herbs, salt, and pepper.", "Coat chicken thoroughly with the herb mixture.", "Roast until golden and cooked through.", "Rest for 5 minutes before serving."]
  },
  {
    id: "REC-04", slug: "miso-glazed-eggplant", title: "Miso Glazed Eggplant",
    description: "Cross-hatched roasted eggplant broiled with red miso, mirin, and sesame.",
    cuisine: "Japanese", category: "Plant-Based", image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=900",
    prepTime: 10, cookTime: 15, servings: 2, difficulty: "Easy",
    ingredients: ["2 small eggplants", "2 tbsp white miso", "1 tbsp mirin", "1 tsp soy sauce", "1 tsp sesame oil", "Scallions and sesame seeds"],
    instructions: ["Halve eggplants and score the flesh in a crosshatch pattern.", "Brush with sesame oil and roast until tender.", "Whisk miso, mirin, and soy sauce.", "Spread glaze over the eggplant and broil briefly.", "Finish with scallions and sesame seeds."]
  },
  {
    id: "REC-05", slug: "classic-lentil-dahl", title: "Classic Lentil Dahl",
    description: "Yellow split lentils simmered with turmeric and finished with a fragrant tempering.",
    cuisine: "Indian", category: "Soups & Stews", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Easy",
    ingredients: ["1 cup yellow lentils", "1 onion", "2 tomatoes", "1 tsp turmeric", "1 tsp cumin seeds", "2 cloves garlic", "3 cups water"],
    instructions: ["Rinse lentils until the water runs clear.", "Simmer lentils with turmeric and water until soft.", "Sauté onion, garlic, cumin, and tomatoes separately.", "Stir the tempering into the lentils and season.", "Serve warm with rice or flatbread."]
  },
  {
    id: "REC-06", slug: "sourdough-focaccia", title: "Sourdough Focaccia",
    description: "High-hydration open crumb focaccia steeped in extra virgin olive oil and herbs.",
    cuisine: "Italian", category: "Baking & Grains", image: "https://images.unsplash.com/photo-1619531040576-f94167406618?w=900",
    prepTime: 20, cookTime: 40, servings: 8, difficulty: "Hard",
    ingredients: ["500g bread flour", "100g active sourdough starter", "375ml water", "10g salt", "Olive oil", "Rosemary"],
    instructions: ["Mix flour, starter, and water until combined.", "Add salt and fold the dough several times during bulk fermentation.", "Transfer to an oiled tray and allow to rise.", "Dimple the dough with oiled fingers and add rosemary.", "Bake at 220°C until deeply golden."]
  },
  {
    id: "REC-07", slug: "smoky-black-bean-soup", title: "Smoky Black Bean Soup",
    description: "Deep chipotle broth with tender simmered black turtle beans, cumin, and lime.",
    cuisine: "Latin American", category: "Soups & Stews", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Easy",
    ingredients: ["2 cans black beans", "1 onion", "2 garlic cloves", "1 tsp cumin", "1 chipotle pepper", "3 cups vegetable stock", "1 lime"],
    instructions: ["Sauté diced onion and garlic until soft.", "Add cumin and chopped chipotle pepper.", "Stir in beans and vegetable stock.", "Simmer for 20 minutes and mash some beans to thicken.", "Finish with lime juice and fresh herbs."]
  },
  {
    id: "REC-08", slug: "sesame-tahini-noodles", title: "Sesame Tahini Noodles",
    description: "Cold wheat noodles tossed in roasted sesame paste, garlic-chili oil, and cucumber.",
    cuisine: "Middle Eastern", category: "Quick Meals", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=900",
    prepTime: 10, cookTime: 5, servings: 2, difficulty: "Easy",
    ingredients: ["200g wheat noodles", "2 tbsp tahini", "1 tbsp soy sauce", "1 tsp chili oil", "1 garlic clove", "1 cucumber", "1 tsp rice vinegar"],
    instructions: ["Cook noodles, drain, and rinse under cool water.", "Whisk tahini, soy sauce, vinegar, garlic, and a splash of water.", "Toss noodles in the sesame sauce.", "Top with cucumber and chili oil.", "Serve immediately or chill briefly."]
  }
];
