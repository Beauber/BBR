class V1::CategoriesController < ApplicationController
  def show
    category = Category.find(params[:id])
    render json: category.as_json
  end
end
