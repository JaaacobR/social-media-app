defmodule SocialMediaApiWeb.Router do
  use SocialMediaApiWeb, :router
  use Plug.ErrorHandler

  defp handle_errors(conn, %{reason: %Phoenix.Router.NoRouteError{message: message}}) do
    conn
    |> json(%{errors: message})
    |> halt()
  end

  defp handle_errors(conn, %{reason: %{message: message}}) do
    conn
    |> json(%{errors: message})
    |> halt()
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug
  end

  scope "/api", SocialMediaApiWeb do
    pipe_through :api
    get "/", DefaultController, :index
    post "/accounts/create", AccountController, :create
    post "/accounts/sign_in", UserController, :sign_in
    post "/posts/create", PostController, :create
  end
end
