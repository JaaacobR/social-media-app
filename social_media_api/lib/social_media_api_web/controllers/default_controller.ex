defmodule SocialMediaApiWeb.DefaultController do
  use SocialMediaApiWeb, :controller

  def index(conn, _params) do
    text conn, "API WORK"
  end
end
