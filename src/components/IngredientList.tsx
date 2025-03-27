'use client'
import React, { useState, useEffect } from 'react'
import { Ingredient, IngredientListProps } from './@types/IngredienteList'

export function IngredientList({
  ingredients,
  onSelectionChange,
}: IngredientListProps) {
  const [ingredientState, setIngredientState] = useState<
    { ingredient: Ingredient; selected: boolean }[]
  >(
    ingredients.map((ingredient) => ({
      ingredient,
      selected: false,
    })),
  )

  const toggleCheckbox = (index: number) => {
    setIngredientState((prevState) => {
      const updatedState = prevState.map((item, i) =>
        i === index ? { ...item, selected: !item.selected } : item,
      )

      const sortedState = updatedState.sort((a, b) => {
        if (a.selected === b.selected) return 0
        return a.selected ? -1 : 1
      })

      return sortedState
    })
  }

  useEffect(() => {
    const selectedIngredients = ingredientState
      .filter((item) => item.selected)
      .map((item) => item.ingredient)

    onSelectionChange(selectedIngredients)
  }, [ingredientState, onSelectionChange])

  return (
    <div className="max-h-[40%] overflow-y-auto">
      {ingredientState.map(({ ingredient, selected }, index) => (
        <div
          key={index}
          className="flex justify-between items-center border w-full px-3 py-4 my-1 rounded"
        >
          <div className="flex">
            <span className="text-medium mr-2"> {ingredient.icon} </span>
            <p className="text-small text-gray-900"> {ingredient.name} </p>
          </div>

          <label
            htmlFor={`checkbox-${index}`}
            className="flex items-center cursor-pointer"
          >
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              checked={selected}
              onChange={() => toggleCheckbox(index)}
              className="hidden"
            />
            <div
              className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition ${
                selected ? 'border-gray-400 bg-gray-100' : 'border-gray-400'
              }`}
            >
              {selected && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </label>
        </div>
      ))}
    </div>
  )
}
