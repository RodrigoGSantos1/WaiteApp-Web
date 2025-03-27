export interface Ingredient {
  icon: string
  name: string
}

export interface IngredientListProps {
  ingredients: Ingredient[]
  onSelectionChange: (selectedIngredients: Ingredient[]) => void
}
