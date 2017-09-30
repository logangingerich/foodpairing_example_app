class WelcomeController < ApplicationController
require "foodpairing"

  def index
    @test = Foodpairing.get_all_ingredients
  end
end
