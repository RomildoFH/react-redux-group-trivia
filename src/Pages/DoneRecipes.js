import React, { useEffect, useState } from 'react';
import doneRecipes from '../tests/helpers/mockDoneRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoneCards from '../components/DoneCards';

function DoneRecipes() {
  // const doneRecipes = localStorage.getItem('doneRecipes');
  // const [doneRecipesState, setDoneRecipesState] = ([]);
  const [filtered, setFiltered] = useState([]);
  // let savedRecipes = doneRecipes;
  // console.log(savedRecipes);

  const handleFilter = ({ target }) => {
    // let savedRecipes = doneRecipes;
    const chooseFilter = target.name;

    if (chooseFilter === 'all') {
      setFiltered(doneRecipes);
    }
    if (chooseFilter === 'drinks') {
      setFiltered(doneRecipes.filter((recipe) => (
        recipe.type === 'drink'
      )));
    }
    if (chooseFilter === 'meals') {
      setFiltered(doneRecipes.filter((recipe) => (
        recipe.type === 'meal'
      )));
    }
  };

  // useEffect(() => {
  //   setDoneRecipesState(doneRecipes);
  // }, [doneRecipes]);

  useEffect(() => {
    setFiltered(doneRecipes);
  }, []);

  // console.log(doneRecipes);
  // const [doneRecipesState] = useState(doneRecipes); // teste da renderização
  // const [filtered, setFiltered] = useState([]);

  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <div>
          <button
            name="all"
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ handleFilter }
          >
            All
          </button>
          <button
            name="meals"
            type="button"
            data-testid="filter-by-meal-btn"
            onClick={ handleFilter }
          >
            Meals
          </button>
          <button
            name="drinks"
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ handleFilter }
          >
            Drinks
          </button>
        </div>
        <section>
          {
            filtered.map((recipe, index) => (<DoneCards
              key={ index }
              image={ recipe.image }
              name={ recipe.name }
              nationality={ recipe.nationality }
              category={ recipe.category }
              type={ recipe.type }
              alcohol={ recipe.alcoholicOrNot }
              index={ index }
              doneDate={ recipe.doneDate }
              tags={ recipe.tags }
              id={ recipe.id }
            />))
          }
        </section>
        <Footer />
      </div>
    </>
  );
}

export default DoneRecipes;
