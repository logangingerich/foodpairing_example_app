class Api::IngredientsController < ApiController
  def index
    ingredient = Foodpairing.search_ingredients_by_name(params[:query]).first
    #search_ingredients_by_name takes in a string and returns an object with
    #all matching ingredients

    pairings_array = Foodpairing.get_pairings_for_ingredient(ingredient["id"])
    #get_pairings_for_ingredient takes in an ingredient id and returns an
    #ARRAY of ingredients that would pair well.

    #get_all_ingredient returns an object containing all ingredients with
    #descriptions
    #all_ingredients = Foodpairing.get_all_ingredients

    #get_ingredient_by_id returns an object containing the corresponding
    #ingredient along with a description
    #ingredient_by_id = Foodpairing.get_ingredient_by_id(1)

    render json: {
      ingredient: ingredient["name"],
      pairings: pairings_array,
      all_ingredients: pairings_array
    }
  end
end
