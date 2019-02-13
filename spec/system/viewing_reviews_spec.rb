require 'rails_helper'

RSpec.describe 'Viewing reviews' do
  it 'shows all reviews associated with the target recipe' do
    user = create :user, name: "Peppa Pig"
    recipe = create :recipe, title: "Old Friend Noodle"
    create :review, user: user, recipe: recipe, taste: 4

    visit root_path
    click_on recipe.title

    expect(page).to have_content "Reviews"
    expect(page).to have_content "Peppa Pig"
    expect(page).to have_content "Taste: Four Stars"
  end
end