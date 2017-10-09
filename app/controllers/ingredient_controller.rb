class IngredientController < ApplicationController
  # def show
  #   #get_all_ingredient returns an object containing all ingredients with
  #   #descriptions
  #   @all_ingredients = Foodpairing.get_all_ingredients
  #
  #   #get_ingredient_by_id returns an object containing the corresponding
  #   #ingredient along with a description
  #   @ingredient_by_id = Foodpairing.get_ingredient_by_id(1)
  #
  #   # search_ingredients_by_name takes in a string and returns an object with
  #   #all matching ingredients
  #   @ingredient_by_name = Foodpairing.search_ingredients_by_name("whiskey")
  #
  #   #get_pairings_for_ingredient takes in an ingredient id and returns an
  #   # ARRAY of ingredients that would pair well.
  #   @whiskey_pairings_array = Foodpairing.get_pairings_for_ingredient(1)
  #   @whiskey_pairings = @whiskey_pairings_array.join("  -  ")
  #   @pairings_array_2 = Foodpairing.get_pairings_for_ingredient(94)
  #   @pairings_2 = @pairings_array_2.join("  -  ")
  #   @pairings_array_3 = Foodpairing.get_pairings_for_ingredient(4281)
  #   @pairings_3 = @pairings_array_3.join("  -  ")
  #   @pairings_array_4 = Foodpairing.get_pairings_for_ingredient(5777)
  #   @pairings_4 = @pairings_array_4.join("  -  ")
  #   @pairings_array_5 = Foodpairing.get_pairings_for_ingredient(6176)
  #   @pairings_5 = @pairings_array_5.join("  -  ")
  #
  #   #get_ingredient_nutrients takes in an ingredient id and returns an object
  #   #containing links to the ingredients nutrients
  #   @ingredient_nutrients = Foodpairing.get_ingredient_nutrients(1)
  #
  #   #get_all_brands returns an object containing the name of all brands
  #   @all_brands = Foodpairing.get_all_brands
  #
  #   #get_brand_by_id takes in a brand id and returns on object containing
  #   #information on the corresponding brand
  #   @brand_by_id = Foodpairing.get_brand_by_id(114)
  #   render json: {
  #     name: @ingrediant.name,
  #     pairings: pairings_array
  #   }
  # end
  def show

    @ingredient = Foodpairing.search_ingredients_by_name(params[:query]).first
    # @ingredient = Foodpairing.get_ingredient_by_id(params[:id])

    #get_pairings_for_ingredient takes in an ingredient id and returns an
    # ARRAY of ingredients that would pair well.
    @pairings_array = Foodpairing.get_pairings_for_ingredient(@ingredient.id])

    render json: {
      name: @ingredient.name,
      pairings: @pairings_array
    }
  end
end
