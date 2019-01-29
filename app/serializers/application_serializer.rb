class ApplicationSerializer < ActiveModel::Serializer
  attribute(:param) { object.to_param } 
end