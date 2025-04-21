import { useState } from 'react';

export default function RecipeCard({ recipe }) {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div style={{
      backgroundColor: '#fff', 
      borderRadius: '10px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      padding: '1.5rem', 
      marginBottom: '1rem',
      transition: 'transform 0.3s ease-in-out',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h2>{recipe.title}</h2>
      <button onClick={() => setShowSteps(prev => !prev)}>
        {showSteps ? 'Hide' : 'Show'} Steps
      </button>
      {showSteps && (
        <ul style={{ marginTop: '1rem', listStyleType: 'none' }}>
          {recipe.steps.map((step, index) => <li key={index} style={{ marginBottom: '0.5rem' }}>{step}</li>)}
        </ul>
      )}
    </div>
  );
}
