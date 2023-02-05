defmodule SocialMediaApiWeb.Router do
  use SocialMediaApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug
  end

  scope "/api", SocialMediaApiWeb do
    pipe_through :api
    get "/", DefaultController, :index
    post "/create", AccountController, :create
    get "/accounts", AccountController, :index
  end
end
