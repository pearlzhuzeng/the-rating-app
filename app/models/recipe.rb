class Recipe < ApplicationRecord
  attribute :detail, :string, default: ''

  has_many :reviews

  validates :title, presence: true

  def average_overall_score
    return 0 if reviews.none?
    
    reviews.sum(&:overall) / reviews.length.to_f
  end

  def number_of_reviews
    return 0 if reviews.none?

    reviews.length
  end

  def average_taste_score
    return 0 if reviews.none?
    
    reviews.sum(&:taste) / reviews.length.to_f
  end

  def average_appearance_score
    return 0 if reviews.none?
    
    reviews.sum(&:appearance) / reviews.length.to_f
  end

  def average_ease_score
    return 0 if reviews.none?
    
    reviews.sum(&:ease) / reviews.length.to_f
  end

  def average_time_score
    return 0 if reviews.none?
    
    reviews.sum(&:time) / reviews.length.to_f
  end

  def average_cost_score
    return 0 if reviews.none?
    
    reviews.sum(&:cost) / reviews.length.to_f
  end
end
