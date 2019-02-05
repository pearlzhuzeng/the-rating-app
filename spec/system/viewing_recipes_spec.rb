require 'rails_helper'

RSpec.describe 'Viewing recipes' do
  it 'shows all recipes' do
    create :recipe, title: "Old Friend Noodle"
    create :recipe, title: "Kongpao Chicken"

    visit root_path

    expect(page).to have_content "Old Friend Noodle"
    expect(page).to have_content "Kongpao Chicken"
  end
end