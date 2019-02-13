class Recipe < ApplicationRecord
  has_many :reviews

  def average_score
    return 0 if reviews.none?
    
    reviews.sum(&:overall) / reviews.length.to_f
  end
end
