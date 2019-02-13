class ReviewsController < ApplicationController
  def index
    recipe = Recipe.find(params[:recipe_id])
    @reviews = recipe.reviews
    render json: @reviews
  end

  # POST /reviews.json
  def create
    recipe = Recipe.find(params[:recipe_id])

    @review = recipe.reviews.build(review_params)
    @review.user = current_user

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:name, :taste, :appearance, :ease, :time, :cost, :comment)
  end
end
