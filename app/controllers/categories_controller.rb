class CategoriesController < ApplicationController
  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: {errors: @category.errors.full_messages}
    end
  end

  def index
    search = {}
    search['name_cont'] = params[:search]
    @categories = Category.ransack(search).result(distinct: true).map{|cat| {value: cat.id, text: cat.name}}
    render json: @categories, status: :ok
  end

  private

    def category_params
      params.require(:category).permit(:name, :description)
    end
end
