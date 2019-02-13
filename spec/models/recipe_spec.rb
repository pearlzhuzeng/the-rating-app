require 'rails_helper'

RSpec.describe Recipe, type: :model do
  it { should have_many(:reviews) }

  describe '#average_score' do
    it 'calculates the average score of all the recipes’ reviews' do
      recipe = create :recipe

      create :review, recipe: recipe,
                      taste: 5, appearance: 5, time: 5, ease: 5, cost: 5
      create :review, recipe: recipe,
                      taste: 1, appearance: 1, time: 1, ease: 1, cost: 1

      expect(recipe.average_score).to eq 3
    end

    it 'returns 0 when it has no reviews' do
      recipe = create :recipe
      expect(recipe.average_score).to eq 0
    end
  end
end
