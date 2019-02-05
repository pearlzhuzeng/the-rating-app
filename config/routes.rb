class ReachRouterConstraint
  def matches?(request)
    !request.params[:reach_router_location].start_with?('api')
  end
end

Rails.application.routes.draw do
  root to: 'home#show'
  
  # expect 'api/' prefix to prevent conflict between rails/react routes
  scope :api do
    resources :recipes, only: %i[index show]
  end

  get '*reach_router_location', to: 'home#show',
      format: false,
      constraints: ReachRouterConstraint.new
end
