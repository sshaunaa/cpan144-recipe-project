'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RecipeCard from '../../components/RecipeCard';

export default function Recipes() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Spaghetti Carbonara', steps: ['Boil pasta', 'Cook bacon', 'Mix with eggs and cheese'] },
    { id: 2, title: 'Pancakes', steps: ['Mix ingredients', 'Heat pan', 'Flip pancakes'] },
    { id: 3, title: 'Avocado Toast', steps: ['Toast bread', 'Mash avocado', 'Spread on toast', 'Top with lemon'] }
  ]);

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Our Recipes 🍽️</h1>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
      <Footer />
    </>
  );
}
