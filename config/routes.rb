class ReachRouterConstraint
  def matches?(request)
    !request.params[:reach_router_location].start_with?('api')
  end
end

Rails.application.routes.draw do  
  root to: 'home#show'

  # Clearance routes
  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, controller: "clearance/users", only: [:create] do
    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"

  
  # expect 'api/' prefix to prevent conflict between rails/react routes
  scope :api do
    resources :recipes, only: %i[index show] do
      resources :reviews, only: %i[create]
    end
  end

  get '*reach_router_location', to: 'home#show',
      format: false,
      constraints: ReachRouterConstraint.new
end
