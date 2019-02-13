require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  describe "POST /reviews" do
    it "creates a review" do     
      user =  create :user
      recipe = create :recipe

      post recipe_reviews_path(recipe.id, as: user), params: {
        review: {
          name: 'Peppa Pig',
          taste: 5,
          appearance: 4,
          ease: 3,
          time: 2,
          cost: 1,
          comment: 'Great'
        }
      }

      expect(response).to have_http_status :created

      review = Review.order(:created_at).last
      expect(review.taste).to eq(5)
      expect(review.comment).to eq('Great')
    end
  end
end
