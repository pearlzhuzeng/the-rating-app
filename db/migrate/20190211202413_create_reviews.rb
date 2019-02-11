class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :taste
      t.integer :appearance
      t.integer :ease
      t.integer :time
      t.integer :cost
      t.text :comment
      
      t.references :recipe, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
