class Review < ApplicationRecord
  belongs_to :recipe
  belongs_to :user

  def username
    user.name
  end
end