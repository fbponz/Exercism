/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer)
{
  if (timer === 'undefined' || timer == null )
  {
    return 'You forgot to set the timer.'
  }
  else if (timer == 0)
  {
    return 'Lasagna is done.'
  }
  else
  {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, timer=2)
{
  return layers.length * timer;
}

export function quantities(array_elements)
{
  var noodles = 0;
  var sauce = 0;
  for(var i = 0; i < array_elements.length; i++)
  {
      if(array_elements[i]==='noodles')
      {
        noodles+=50
      }
      if(array_elements[i]==='sauce')
      {
        sauce+=0.2
      }
  }
  return {'noodles':noodles ,'sauce':sauce}
}

export function addSecretIngredient(friendsList, myList)
{
  myList.push(friendsList[friendsList.length -1])
}

export function scaleRecipe(recipe, scaleFactor)
{
  var recipe_b = {...recipe};
  for (var key in recipe_b)
  {
      recipe_b[key]*=(scaleFactor/2);
  }
  return recipe_b;