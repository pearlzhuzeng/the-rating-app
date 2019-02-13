class ReviewSerializer < ApplicationSerializer
  attributes :taste, :appearance, :time, :ease, :cost, :comment
  attribute :name

  def name
    object.user.name
  end
end