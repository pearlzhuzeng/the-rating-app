FactoryBot.define do
  factory :review do
    association :user
    association :recipe

    taste { 5 }
    appearance { 5 }
    ease { 5 }
    time { 5 }
    cost { 5 }
  end
end