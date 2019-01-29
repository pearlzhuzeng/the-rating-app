Rails.application.routes.draw do
  root to: 'home#show'
  
  resources :recipes, only: %i[index]
end
