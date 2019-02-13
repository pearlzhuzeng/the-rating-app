require 'rails_helper'

RSpec.describe 'Viewing recipes' do
  it 'shows all recipes' do
    create :recipe, title: "Old Friend Noodle"
    create :recipe, title: "Kongpao Chicken"

    visit root_path

    expect(page).to have_content "Old Friend Noodle"
    expect(page).to have_content "Kongpao Chicken"
  end

  it 'includes a recipe’s average score' do
    recipe = create :recipe, title: "Old Friend Noodle"
    create :review, recipe: recipe, taste: 5, appearance: 5, cost: 5, ease: 5, time: 5

    visit root_path

    expect(page).to have_content "Average Score: 5"
  end
end