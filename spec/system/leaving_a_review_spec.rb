require 'rails_helper'

RSpec.describe 'Leaving a review' do
  it 'is possible' do
    create :recipe, title: "A New Dish"
    
    visit root_path
    click_on 'A New Dish'

    click_on 'Rate This Recipe'

    within_fieldset "Taste" do
      choose 'Five Stars'
    end

    within_fieldset "Appearance" do
      choose 'Four Stars'
    end

    within_fieldset "Ease" do
      choose 'Three Stars'
    end

    within_fieldset "Time to Prepare" do
      choose 'One Star'
    end

    within_fieldset "Cost" do
      choose 'Two Stars'
    end

    fill_in 'Comment', with: 'Great recipe but takes too long to cook!'

    click_button 'Submit'

    expect(page).to have_content 'Reviews'
    expect(page).to have_content 'Taste: Five Stars'
    expect(page).to have_content 'Appearance: Four Stars'
    expect(page).to have_content 'Ease: Three Stars'
    expect(page).to have_content 'Time: One Star'
    expect(page).to have_content 'Cost: Two Stars'
    expect(page).to have_content 'Great recipe but takes too long to cook!'

    review = Review.order(:created_at).last
    expect(review.comment).to eq('Great recipe but takes too long to cook!')
  end
end