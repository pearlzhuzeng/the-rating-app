require 'rails_helper'

RSpec.describe 'Viewing recipes' do
  it 'shows all recipes' do
    create :recipe, title: "Old Friend Noodle"

    visit root_path

    expect(page).to have_content "Old Friend Noodle"
  end
end