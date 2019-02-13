require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to(:recipe) }
  it { should belong_to(:user) }

  it 'validates presence of taste' do
    review = build_stubbed :review, taste: nil
    expect(review).not_to be_valid
  end

  it 'validates presence of appearance' do
    review = build_stubbed :review, appearance: nil
    expect(review).not_to be_valid
  end

  it 'validates presence of time' do
    review = build_stubbed :review, time: nil
    expect(review).not_to be_valid
  end

  it 'validates presence of ease' do
    review = build_stubbed :review, ease: nil
    expect(review).not_to be_valid
  end

  it 'validates presence of cost' do
    review = build_stubbed :review, cost: nil
    expect(review).not_to be_valid
  end

  describe '#overall' do
    it 'calculates the average of scores for all five categories' do
      review = build_stubbed(
        :review, taste: 5, appearance: 4, ease: 3, time: 2, cost: 1
      )

      expect(review.overall).to eq 3
    end
  end
end
