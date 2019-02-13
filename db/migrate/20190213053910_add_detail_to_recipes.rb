class AddDetailToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :detail, :text
  end
end
