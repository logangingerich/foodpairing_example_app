class Api::BrandsController < ApiController
  def index
    brand = Foodpairing.get_brand_by_id(params[:query])
    #get_brand_by_id takes in a brand id and returns on object containing
    #information on the corresponding brand

    brands_array = []
    all_brands = Foodpairing.get_all_brands
    all_brands.each do |brand|
      brands_array.push(brand["name"])
    end
    #get_all_brands returns an object containing the name of all brands

    render json: {
      brand: brand["name"],
      all_brands: brands_array
    }
  end
end
