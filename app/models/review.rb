class Review < ApplicationRecord
  belongs_to :recipe
  belongs_to :user

  def username
    user.name
  end

  def overall
    (taste + appearance + ease + time + cost) / 5
  end
end