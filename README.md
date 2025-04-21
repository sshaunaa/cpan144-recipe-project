# Recipe App

## Project Overview
This is a simple recipe app built with **Next.js**. The app allows users to browse a list of recipes and view detailed instructions. It demonstrates basic features like routing, state management, and component creation while maintaining responsiveness and user-friendly design.

## Folder Structure
/components

Navbar.js # Navigation bar component

Footer.js # Footer component

RecipeCard.js # Recipe card component

/pages

index.js # Homepage displaying an introduction to the app

recipes.js # Page listing available recipes

about.js # About page with details about the app

/styles

globals.css # Global CSS styles

## Key Components

1. **Navbar.js**
   - A navigation bar displayed on all pages, providing links to the Home, Recipes, and About pages.
   - The navbar ensures smooth navigation between sections of the app.

2. **Footer.js**
   - A footer displayed on all pages, offering basic information or copyright details.
   - This component is simple and keeps the layout clean.

3. **RecipeCard.js**
   - Displays individual recipe details in a card format.
   - Each card includes a title, short description, and a button to show/hide the recipe instructions.
   - The card uses a button to toggle visibility of the recipe steps, utilizing state management.

## Pages and Routing

1. **Home (`/`)**: 
   - The main landing page of the app with a welcoming message.
   
2. **Recipes (`/recipes`)**:
   - Displays a list of recipes fetched from a static array.
   - Each recipe is linked to a detailed view using the `RecipeCard` component.

3. **About (`/about`)**:
   - Provides more information about the app, its creators, and its purpose.

## State Management

The app uses **React's `useState` hook** to manage local state within components:

1. **RecipeCard Component**:
   - State is used to toggle the visibility of the recipe instructions when the "Show Recipe" button is clicked.
   - `useState` is used to track whether the recipe instructions should be visible.

2. **Data Flow**:
   - The `Recipes` page is responsible for managing the list of recipes. It passes data (recipe titles and descriptions) as props to the `RecipeCard` component for rendering.
   - State is lifted when necessary to share information across multiple components (such as passing recipe data from the parent `Recipes` page to individual `RecipeCard` components).

## How to Run

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
