import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import AppProvider from '../context/AppProvider';
import mockFood from './helpers/mockDataFoods';
import mockDrinks from './helpers/mockDataDrinks';
import mockDataCategorysDrinks from './helpers/mockCategorysDrinks';
import mockDataCategorysFoods from './helpers/mockCategorysFoods';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

jest
  .fn()
  .mockReturnValue(mockFood)
  .mockReturnValueOnce(mockDrinks)
  .mockReturnValueOnce(mockDataCategorysDrinks)
  .mockReturnValueOnce(mockDataCategorysFoods);
afterEach(() => {
  jest.clearAllMocks();
});

describe('TESTANDO O COMPONENT RECIPEDETAILS', () => {
  const meal = '/meals/52977';
  const drink = '/drinks/15997';
  it('testando component recipeDetails/foods', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    act(() => {
      history.push(meal);
    });
    expect(history.location.pathname).toBe(meal);

    const title = await screen.findByTestId('recipe-title');
    expect(title).toBeInTheDocument();

    const img = await screen.findByTestId('recipe-photo');
    expect(img).toBeInTheDocument();

    const category = await screen.findByTestId('recipe-category');
    expect(category).toBeInTheDocument();

    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();

    const ytb = await screen.findByTestId('video');
    expect(ytb).toBeInTheDocument();

    const startRecipe = await screen.findByTestId('start-recipe-btn');
    expect(startRecipe).toBeInTheDocument();

    userEvent.click(startRecipe);
  });

  it('testando component recipeDetails/drinks', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    act(() => {
      history.push(drink);
    });
    expect(history.location.pathname).toBe(drink);

    const title = await screen.findByTestId('recipe-title');
    expect(title).toBeInTheDocument();

    const img = await screen.findByTestId('recipe-photo');
    expect(img).toBeInTheDocument();

    const category = await screen.findByTestId('recipe-category');
    expect(category).toBeInTheDocument();

    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();

    const ytb = await screen.findByTestId('video');
    expect(ytb).toBeInTheDocument();

    const startRecipe = await screen.findByTestId('start-recipe-btn');
    expect(startRecipe).toBeInTheDocument();

    const list0 = await screen.findByTestId('0-ingredient-name-and-measure');
    expect(list0).toBeInTheDocument();

    const list1 = await screen.findByTestId('1-ingredient-name-and-measure');
    expect(list1).toBeInTheDocument();

    const list2 = await screen.findByTestId('2-ingredient-name-and-measure');
    expect(list2).toBeInTheDocument();
    act(() => {
      userEvent.click(startRecipe);
    });
  });
  it('testando recomended no component recipeDetails/drinks', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    act(() => {
      history.push(drink);
    });
    const recomendeDrinkOne = await screen.findByTestId('0-recommendation-title');
    expect(recomendeDrinkOne).toBeInTheDocument();

    const recomendedCardTwoDrink = await screen.findByTestId('1-recommendation-title');
    expect(recomendedCardTwoDrink).toBeInTheDocument();

    const recomendedCardThreeDrink = await screen.findByTestId('2-recommendation-title');
    expect(recomendedCardThreeDrink).toBeInTheDocument();

    const recomendedCardFourDrink = await screen.findByTestId('3-recommendation-title');
    expect(recomendedCardFourDrink).toBeInTheDocument();

    const recomendedCardFiveDrink = await screen.findByTestId('4-recommendation-title');
    expect(recomendedCardFiveDrink).toBeInTheDocument();

    const recomendedCardSixDrink = await screen.findByTestId('5-recommendation-title');
    expect(recomendedCardSixDrink).toBeInTheDocument();
  });

  it('testando recomended no component recipeDetails/foods', async () => {
    const { history } = renderWithRouter(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    act(() => {
      history.push(meal);
    });
    const recomendedCardOne = await screen.findByTestId('0-recommendation-title');
    const recomendedCardTwo = await screen.findByTestId('1-recommendation-title');
    const recomendedCardThree = await screen.findByTestId('2-recommendation-title');
    const recomendedCardFour = await screen.findByTestId('3-recommendation-title');
    const recomendedCardFive = await screen.findByTestId('4-recommendation-title');
    const recomendedCardSix = await screen.findByTestId('5-recommendation-title');
    expect(recomendedCardOne).toBeInTheDocument();
    expect(recomendedCardTwo).toBeInTheDocument();
    expect(recomendedCardThree).toBeInTheDocument();
    expect(recomendedCardFour).toBeInTheDocument();
    expect(recomendedCardFive).toBeInTheDocument();
    expect(recomendedCardSix).toBeInTheDocument();
  });
});