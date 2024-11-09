interface Ingredient {
  name: string;
  quantity: string;
}

interface MethodStep {
  title: string;
  steps: Array<{ name?: string; description: string }>;
}

interface Recipe {
  id: number;
  title: string;
  description: string;
  keywords: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  ingredients: Ingredient[]; // Expected as an array of ingredients
  method: MethodStep[]; // Expected as an array of method steps
  conclusion: string;
  yt: string;
  category: string;
  createdAt: string;
  updatedAt: Date | null;
}
