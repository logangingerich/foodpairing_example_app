Rails.application.routes.draw do
  namespace:api, defaults:{format: :json} do
    resources :ingredients
    resources :brands
  end

  get "*path" => redirect("/?goto=%{path}")
end
