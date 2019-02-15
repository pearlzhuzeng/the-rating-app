class RecipeSerializer < ApplicationSerializer
  attributes :title, :detail, :average_overall_score, :number_of_reviews, :average_taste_score, :average_appearance_score, :average_ease_score, :average_time_score, :average_cost_score
end