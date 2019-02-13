class Review < ApplicationRecord
  belongs_to :recipe
  belongs_to :user

  validates :taste, presence: true
  validates :appearance, presence: true
  validates :time, presence: true
  validates :ease, presence: true
  validates :cost, presence: true

  def username
    user.name
  end

  def overall
    (taste + appearance + ease + time + cost) / 5.to_f
  end
end