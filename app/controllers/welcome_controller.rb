class WelcomeController < ApplicationController
require "foodpairing"

  def index
    Foodpairing:.get_all_ingredients
  end
end
