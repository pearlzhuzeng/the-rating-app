class RemoveNameFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :name, :text
  end
end
