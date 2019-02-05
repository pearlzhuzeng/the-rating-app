require "rails_helper"

RSpec.describe "fallback routes for Reach Router" do
  it "routes any unknown route that doesn’t start with api " \
     "to home#show for use by Reach Router in React" do
    aggregate_failures do
      expect(get("/recipes/123"))
        .to route_to(controller: 'home', action: 'show', 
                     reach_router_location: 'recipes/123')

      expect(get("/pandas/123"))
        .to route_to(controller: 'home', action: 'show', 
                     reach_router_location: 'pandas/123')

      expect(get("/api/pandas/123")).not_to be_routable
    end
  end
end