class WelcomeController < ApplicationController
  def index
    @test = Foodpairing.get_all_ingredients
    @test2 = Foodpairing.get_ingredient_by_id(1)
    @test3 = Foodpairing.search_ingredients_by_name("whiskey")
    @test4 = Foodpairing.get_pairings_for_ingredient(1)
    @test5 = Foodpairing.get_ingredient_nutrients(1)
    @test6 = Foodpairing.get_all_brands
    @test7 = Foodpairing.get_brand_by_id(114)
  end
end
