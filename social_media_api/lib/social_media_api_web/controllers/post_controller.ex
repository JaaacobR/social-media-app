defmodule SocialMediaApiWeb.PostController do
  use SocialMediaApiWeb, :controller

  alias SocialMediaApiWeb.{Auth.Guardian, Auth.ErrorResponse}
  alias SocialMediaApi.{Users, Users.User, Posts , Posts.Post}
  alias SocialMediaApi.Posts.Post

  action_fallback SocialMediaApiWeb.FallbackController


  def create(conn , %{"post" => post_params}) do
    
  end

end