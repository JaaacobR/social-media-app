defmodule SocialMediaApiWeb.Router do
  use SocialMediaApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", SocialMediaApiWeb do
    pipe_through :api
    get "/", DefaultController, :index
  end
end
