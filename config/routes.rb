Rails.application.routes.draw do
  namespace:api, defaults:{format: :json} do
    resources :ingredients
  end


end
