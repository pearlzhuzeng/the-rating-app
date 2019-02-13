class ReviewSerializer < ApplicationSerializer
  attributes :taste, :appearance, :time, :ease, :cost, :comment
  attribute(:name) { object.username } # TODO: Delete this
  attribute :username
end