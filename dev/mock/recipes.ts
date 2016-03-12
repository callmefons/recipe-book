import {Recipe} from '../shared/recipe'; 
import {Ingredient} from '../shared/ingredient';

export let RECIPES : Recipe[] = [
	new Recipe(
		'cookie',
		'chocolate ship cookie',
		'http://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/Desktop%20Images/13152.jpg',
		[
			new Ingredient('Powder', 2),
			new Ingredient('Sugar', 3),
			new Ingredient('chocolate', 5)
		]
	),
	new Recipe(
		'cake',
		'chocolate cake',
		'http://www.fnstatic.co.uk/images/source/article/omg-chocolate-cake-7_1.jpg',
		[
			new Ingredient('Powder', 4),
			new Ingredient('Sugar', 5),
			new Ingredient('chocolate', 6)
		]
	)
];