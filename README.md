# NACAD (New Age / Create Addition Bridge)

NACAD provides  cross-compatibility between **Create: Crafts & Additions** and **Create: New Age**.

It dynamically converts recipes between the two mods' energy-based processing systems by default it prevents duplicate or conflicting recipes.

### Basic Implementation
You can use the built-in functions directly in your `ServerEvents.recipes` event.
The following code transforms all of the charging recipes from **Create: Crafts & Additions** to energising recipes from **Create: New Age**.
```javascript
ServerEvents.recipes(event => {
  // 1. Create maps of target machine recipes
  let energisingRecipesMap = new Map();
  mapType(event, global.recipeTypes.energising, energisingRecipesMap);

  // 2. Run the conversion
  event.forEachRecipe({ type: global.recipeTypes.charging }, recipe => {
    chargingToEnergising(event, recipe, energisingRecipesMap);
  });
});
```
---
- **Let duplicate and confliting recipe through:** change the `doConversionCheck` flag in the _chargingToEnergising()_ and _energisingToCharging()_ functions calls to _false_.
- **Add just some recipes:** to add just 1 or more recipes manually you *DON'T* have to do mapType() only if you don't care about conflicts/duplicates, call the function like this _chargingToEnergising(event, someRecipeObject, null, false);_
---
