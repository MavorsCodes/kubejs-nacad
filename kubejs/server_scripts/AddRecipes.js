ServerEvents.recipes(event => {
  
  let energisingRecipesMap = new Map();
  mapType(event,recipeType['energising'],energisingRecipesMap);
  let chargingRecipesMap = new Map();
  mapType(event,recipeType['charging'],chargingRecipesMap);


  event.forEachRecipe({ type: recipeType['charging'] }, recipe => {
    chargingToEnergising(event, recipe, energisingRecipesMap);
  });

    event.forEachRecipe({ type: recipeType['energising'] }, recipe => {
    energisingToCharging(event, recipe, chargingRecipesMap);
  });

});
